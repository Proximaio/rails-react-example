import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PageOne from './Components/PageOne';
import PageTwo from './Components/PageTwo';
import DefaultComponent from './Components/DefaultComponent'
import { BrowserRouter, Route, hashHistory } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <BrowserRouter history={hashHistory}>
        <div>
          <Route pattern="/" component={DefaultComponent} />
          <Route pattern="/react/foo" component={PageOne} />
          <Route path="/react/bar" component={PageTwo} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
