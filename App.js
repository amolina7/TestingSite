import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Navigation} from './Navigation';
import Button from 'material-ui/Button';

class App extends Component {
  render() {
    return (
      <div>
        <title> Food Blog </title>
        <h1> Food Bank </h1>
        <Navigation />
      </div>
    );
  }
}

export default App;
