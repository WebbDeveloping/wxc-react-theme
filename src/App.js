import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views
import Home from './views/Home';
import Test from './views/Test';
import Article from './components/sections/Article';
import HowTo from './components/sections/HowTo';
import AboutUs from './views/AboutUs';
import Consumer from './views/Consumer';
import Merchants from './views/Merchants';
import Acquirer from './views/Acquirers';
import Bankers from './views/Bankers';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded');
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path='/' component={Home} layout={LayoutDefault} />
          <AppRoute
            exact
            path='/article'
            component={Article}
            layout={LayoutDefault}
          />
          <AppRoute
            exact
            path='/about-us'
            component={AboutUs}
            layout={LayoutDefault}
          />
          <AppRoute
            exact
            path='/consumer'
            component={Consumer}
            layout={LayoutDefault}
          />
          <AppRoute
            exact
            path='/merchants'
            component={Merchants}
            layout={LayoutDefault}
          />
          <AppRoute
            exact
            path='/acquirer'
            component={Acquirer}
            layout={LayoutDefault}
          />
          <AppRoute
            exact
            path='/bankers'
            component={Bankers}
            layout={LayoutDefault}
          />
        </Switch>
      )}
    />
  );
};

export default App;
