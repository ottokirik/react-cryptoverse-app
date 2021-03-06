import { Typography, Row, Col, Statistic } from 'antd';
import { Cryptocurrencies, News, Loader } from 'components';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { routesPath } from 'routes';
import { useGetCryptosQuery } from 'services/cryptoApi';

const { Title } = Typography;

export const HomePage = () => {
  const count = 10;
  const { data, isFetching } = useGetCryptosQuery(count);

  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={millify(globalStats?.total)} />
          <Statistic title="Total Market Cap" value={millify(globalStats?.totalMarketCap)} />
          <Statistic title="Total Markets" value={millify(globalStats?.totalMarkets)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={millify(globalStats?.totalExchanges)} />
          <Statistic title="Total 24h Volume" value={millify(globalStats?.total24hVolume)} />
        </Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 cryptocurencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to={routesPath.CRYPTOCURRENCIES}>Show More</Link>
        </Title>
      </div>

      <Cryptocurrencies simplified isOnHomePage />

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest crypto news
        </Title>
        <Title level={3} className="show-more">
          <Link to={routesPath.NEWS}>News</Link>
        </Title>
      </div>

      <News simplified isOnHomePage />
    </>
  );
};
