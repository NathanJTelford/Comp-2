import React, { Component } from 'react';
import './App.css';
import Dash from './Components/Dashboard';
import Wizard from './Components/Wizard';
// import Header from './Components/Header';
import {Router,Route, Switch} from 'react-router-dom';
import route from './route'


class App extends Component {
  render() {
    return (
      <Switch>
      <Route exact path='/' component={Dash}/>
      {/* <Route path ='/Wizard' component={Wizard}/> */}
      </Switch>
    );
  }
}

export default App;
