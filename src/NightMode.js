import React, {Component} from 'react';
import Toggle from 'material-ui/Toggle';
// Needed, or else you get an error
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class NightMode extends React.Component{

    //  Class components should always call the base constructor with 'props'
    //  The constructor function only runs when the component is mounted
    constructor(props){
        super(props);
        //  Do not modify state directly
        //  Use setState({varName: value}) to modify
        //  It is fine not to use setState here since you are in the constructor
        //  start the nightOn value as false
        this.state = {nightOn: false};
        //  Necessary to make 'this' work in the callback
        //  Since this is activated in the Toggle object, this
        //  will be referencing Toggle instead of NightMode
        //  So it will search for Toggle.handleNight instead of Nightmode.handleNight
        this.handleNight = this.handleNight.bind(this);
    }

    handleNight(){

        //  Var needed to access the changed state immdiately
        //  Since setState is asynchronous, 
        var changedToggleState = !(this.state.nightOn);
        this.setState({nightOn: changedToggleState});
        
        if(changedToggleState === true){
            document.body.style.backgroundColor = "black";
        }
        else{
            document.body.style.backgroundColor = "white";
        }  
    }

    render(){
        return (
            <div>
                <MuiThemeProvider>
                    <Toggle
                        onClick = {this.handleNight}
                        label = "Night Mode"
                        labelPosition = "right"
                    />
                </MuiThemeProvider>
            </div>
        );
    }
}