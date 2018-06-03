import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './container/Main'

class Router extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Router;
