import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Nav from './nav';
import WeeklyTask from './weeklyTask';
import MonthlyTask from './monthlyTask';
import YearlyTask from './yearlyTask';


class App extends Component {
  render() {
    return ( 
      <div className = "App" >
        <h1>ALL IN ONE HMS APPLICATION</h1>
        <Nav />
        <br/>

        <Route path="/weekly" component={WeeklyTask} />
        <Route path="/monthly" component={MonthlyTask} />
        <Route path="/yearly" component={YearlyTask} />
      </div>
    );
  }
}

export default App;