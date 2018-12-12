import React, { Component } from 'react';
import './App.css';
import Home from './views/home';
import Checkout from './views/checkout';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/checkout' render={() => <Checkout />} />
        </Switch>
      </div>
    );
  }
}

export default App;
