import { Avatar, Menu, Typography } from 'antd';
import { BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { routesPath } from 'routes';

import icon from 'images/cryptocurrency.png';

export const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to={routesPath.HOME}>Cryptoverse</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark">
        <Menu.Item key={routesPath.HOME} icon={<HomeOutlined />}>
          <Link to={routesPath.HOME}>Home</Link>
        </Menu.Item>
        <Menu.Item key={routesPath.CRYPTOCURRENCIES} icon={<FundOutlined />}>
          <Link to={routesPath.CRYPTOCURRENCIES}>Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item key={routesPath.EXCHANGES} icon={<MoneyCollectOutlined />}>
          <Link to={routesPath.EXCHANGES}>Exchanges</Link>
        </Menu.Item>
        <Menu.Item key={routesPath.NEWS} icon={<BulbOutlined />}>
          <Link to={routesPath.NEWS}>News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};
