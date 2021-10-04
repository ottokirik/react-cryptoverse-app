import { Navbar } from 'components';

import 'App.css';
import { Routes } from 'routes';

export const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Routes />
      </div>
      <div className="footer"></div>
    </div>
  );
};
