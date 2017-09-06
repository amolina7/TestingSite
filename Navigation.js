import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

export class Navigation extends Component{
  render() {
    return(
      <div>
        <Grid container spacing = {16} justify  = "center">
          <Grid item>
            <Button color = "primary" href = "#">
              Home
            </Button>
          </Grid>
          <Grid item>
            <Button color = "primary" href = "#">
              List
            </Button>
          </Grid>
          <Grid item>
            <Button color = "primary" href = "#">
              Contact
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}
