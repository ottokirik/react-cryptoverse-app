import { Layout } from 'antd';
import { HomePage, CryptocurrenciesPage, NewsPage, ExchangesPage, CryptoDetailsPage } from 'pages';
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
  { path: routesPath.CRYPTOCURRENCIES, exact: false, component: CryptocurrenciesPage },
  { path: routesPath.CRYPTODETAILS, exact: false, component: CryptoDetailsPage },
  { path: routesPath.EXCHANGES, exact: false, component: ExchangesPage },
  { path: routesPath.NEWS, exact: false, component: NewsPage },
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
