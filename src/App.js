import React, { Component } from 'react'
import Box from './Box';
import './App.css';
import BoxContainer from './BoxContainer';

class App extends Component {
  render(){
    return (
      <div className="App">
        <BoxContainer/>
      </div>
    );
  }
}

export default App;
