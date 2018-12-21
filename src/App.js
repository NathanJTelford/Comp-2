import React, { Component } from 'react';
import './App.css';
import Dash from './Components/Dashboard';
import Wizard from './Components/Wizard';
// import Header from './Components/Header';
import {Router,Route} from 'react-router';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path = '/' Component={Dash}/>
        <Route path = '/Wizard' Component={Wizard}/>

      </Router>
    );
  }
}

export default App;
