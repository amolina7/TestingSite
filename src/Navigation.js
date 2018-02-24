import React, {Component} from 'react';
import Grid from 'material-ui/GridList';
import Button from 'material-ui/FlatButton';
import {Contact} from './Contact';
//import Checkbox from 'material-ui/Checkbox';

/*
 * You can define a function like this
 * Or you can define it inside the class, though
 * you don't need to include the 'function'
 * keyword if you do
 */
  function testing(){
    console.log("It works");
  }

export class Navigation extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name: 'Navigation',
      state: 'false'
    }
  }

  // Responsible for representation
  render() {
    return(
      <div>
        <Grid container spacing = {16} justify  = "center">
          <Grid item>
            <Button color = "primary" href = "./Contact.html">
              {this.props.name}
            </Button>
          </Grid>
          <Grid item>
            <Button color = "primary" href = "#">
              About
            </Button>
          </Grid>
          <Grid item>
            <Button color = "primary" href = "#">
              Food
            </Button>
          </Grid>
          <Grid item>
            <Button color = "primary" href = "#" onClick = {this.yo}>
              Contact
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}
