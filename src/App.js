import React, { Component } from "react";

import Button from './components/Button'
import './App.css';
import Navbar from './components/navbar'


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      name:""
    };
  }
  // this.reset = this.resetTotal.bind(this)
  ResetCount = () => {
    this.setState({
      count:0,
    });
  };
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    let { count} = this.state;
    
    return (
  
      <div className="app" >
           <Navbar title="VANSHAJ BHARDWAJ"/>
      <div className="counter">
        <div>
          <div className="count">
            <h3>Count:</h3>
            <h1>{count}</h1>
          </div>
          <div className="buttons">
            <Button title={"-"} action={this.decrementCount} />
            <Button title={"Reset"} action={this.ResetCount} />
            <Button title={"+"} action={this.incrementCount} />
          </div>
        </div>
      </div>
      </div>
      
    );
  }
}
