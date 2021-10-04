import { Typography, Row, Col, Statistic } from 'antd';
import millify from 'millify';
import { useGetCryptosQuery } from 'services/cryptoApi';

const { Title } = Typography;

export const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery();

  const globalStats = data?.data?.stats;

  console.log(data);

  if (isFetching) return 'Loading...';

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={millify(globalStats.total)} />
          <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} />
          <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
          <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} />
        </Col>
      </Row>
    </>
  );
};
