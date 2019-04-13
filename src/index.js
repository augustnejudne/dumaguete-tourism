import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.scss';

import Home from './components/home';
import Tour from './components/tour';
import Hotels from './components/hotels';
import Restaurants from './components/restaurants';
import PageNotFound from './components/PageNotFound';

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tour" component={Tour} />
        <Route exact path="/hotels" component={Hotels} />
        <Route exact path="/restaurants" component={Restaurants} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
