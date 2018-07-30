import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <input type="button" value="Home Management"/>
        <input type="button" value="Medical"/>
        <input type="button" value="Finances"/>
      </div>
    );
  }
}

export default App;
