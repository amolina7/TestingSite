import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { NightMode } from './NightMode';
// import {backGround, Bagels, Oranges} from './Images';
//import {Navigation} from './Navigation';
//import {Contact} from './Contact';
//import {ImageShowcase} from './ImageShowcase';
//import Button from 'material-ui/FlatButton';
//import Toggle from 'material-ui/Toggle';

class App extends Component {
  /*
   * A React component should use 'props' to store information that can be changed
   * BUT can only be changed by a different component
   * 
   * A React component should use 'state' to store information that the component itself can change
   */ 
  constructor(props){
    super(props);
    this.state = {status: "false"}
  }

  render() {
    return (
      <div>
        <title> Food Blog </title>
        <h1> Food Bank </h1>
        <NightMode />
      </div>
    );
  }
}
export default App;
