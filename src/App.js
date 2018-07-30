import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import NavBar from './landing';
import hms from './hms';
import med from './med';
import financial from './financial';

class App extends Component {
  render() {
    return ( 
      <div className = "App" >

        <NavBar />

        <Route path="/" exact={true} component={Landing} />
        <Route path="/hms" component={hms} />
        <Route path="/med" component={med} />
        <Route path="/financial" component={financial} />


        <div>
          <hms />
          <med />
          <financial />
        </div>
      </div>

    );
  }
}

const Landing = (props) => {
  return(
    <h1>This is the landing page, freaking awesome!</h1>
  );
}



export default App;