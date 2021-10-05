import { Layout } from 'antd';
import { Cryptocurrencies, News } from 'components';
import { HomePage, ExchangesPage, CryptoDetailsPage } from 'pages';
import { Switch, Route } from 'react-router-dom';

export const routesPath = {
  HOME: '/',
  CRYPTOCURRENCIES: '/cryptocurrencies',
  CRYPTODETAILS: '/crypto/:coinID',
  EXCHANGES: '/exchanges',
  NEWS: '/news',
};

const publicRoutes = [
  { path: routesPath.HOME, exact: true, component: HomePage },
  { path: routesPath.CRYPTOCURRENCIES, exact: false, component: Cryptocurrencies },
  { path: routesPath.CRYPTODETAILS, exact: false, component: CryptoDetailsPage },
  { path: routesPath.EXCHANGES, exact: false, component: ExchangesPage },
  { path: routesPath.NEWS, exact: false, component: News },
];

export const Routes = () => {
  return (
    <Layout>
      <div className="routes">
        <Switch>
          {publicRoutes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </div>
    </Layout>
  );
};
