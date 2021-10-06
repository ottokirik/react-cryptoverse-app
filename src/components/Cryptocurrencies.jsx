import { Card, Col, Input, Row } from 'antd';
import millify from 'millify';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { routesPath } from 'routes';

import { useGetCryptosQuery } from 'services/cryptoApi';
import { Loader } from './Loader';

export const Cryptocurrencies = ({ simplified, isOnHomePage }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);

  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(filteredData);
  }, [cryptoList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <>
      {!isOnHomePage && (
        <div className="search-crypto">
          <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={routesPath.CRYPTODETAILS.replace(':coinID', currency.id)}>
              <Card
                hoverable
                title={`${currency.rank} - ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} alt={currency.name} />}
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};
