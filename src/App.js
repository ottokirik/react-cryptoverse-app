import { Navbar } from 'components';

import { Routes, routesPath } from 'routes';

import 'antd/dist/antd.css';
import 'App.css';
import { Space, Typography } from 'antd';
import { Link } from 'react-router-dom';

export const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Routes />

        <div className="footer">
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to={routesPath.HOME}>Home</Link>
            <Link to={routesPath.EXCHANGES}>Exchanges</Link>
            <Link to={routesPath.NEWS}>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};
