import React, { Component } from 'react';
import './App.css';
import Task from './Task';
import Data from './data.json'
import WeeklyTask from './weeklyTask';
import MonthlyTask from './monthlyTask';

class App extends Component {
  render() {

    
    let yearlyTasks = Data.HMS.Yearly;
    return ( 
      <div className = "App" >
        <h1>ALL IN ONE HMS APPLICATION</h1>

        <WeeklyTask />
        <br/>
        <MonthlyTask />
        <br/>
        <div className = "Time">
          <h2>Yearly</h2>
          {
            yearlyTasks.map(t => {
              return(
                <Task 
                  title={t.Title}
                  dueDate={t.DueDate}
                  description={t.Description}
                />
              )
            })
          }
        </div>
      </div>

    );
  }
}

export default App;