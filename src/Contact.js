import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Grid from 'material-ui/GridList';
import Button from 'material-ui/FlatButton';

class Contact extends React.Component {
  render(){
    return(
      <div>
        <Grid container>
          <Grid item>
            <Button>
              Whoa
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}
ReactDOM.render(<Contact/>, document.getElementById('root'));
