import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import WelcomePage from './component/WelcomePage';
import Main from './container/Main'
import selectedBreed from './container/selectedBreed'

class Router extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/all_dogs" component={Main} />
          <Route exact path="/all_dogs/selected_breed" component={selectedBreed} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Router;
