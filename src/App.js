import React, { Component } from 'react';
import './App.css';
import WeeklyTask from './weeklyTask';
import MonthlyTask from './monthlyTask';
import YearlyTask from './yearlyTask';

class App extends Component {
  render() {
    return ( 
      <div className = "App" >
        <h1>ALL IN ONE HMS APPLICATION</h1>
        <WeeklyTask />
        <br/>
        <MonthlyTask />
        <br/>
        <YearlyTask />
      </div>
    );
  }
}

export default App;