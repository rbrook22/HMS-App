import React, { Component } from 'react';
import './App.css';
import Task from './Task';
import Data from './data.json'

class App extends Component {
  render() {
    let weeklyTasks = Data.HMS.Weekly;
    let monthlyTasks = Data.HMS.Monthly;
    let yearlyTasks = Data.HMS.Yearly;
    return ( 
      <div className = "App" >
        <h1>ALL IN ONE HMS APPLICATION</h1>
        <div className = "Time">
          <h2>Weekly</h2>
          {
            weeklyTasks.map(t =>{
              return (
                <Task 
                  title={t.Title}
                  dueDate={t.DueDate}
                  description={t.Description}
                />
              )
            })
          }
          <Task
            title="test test test"
            dueDate="12/18/2018"
            description="Cut the front and back"
           />
        </div>
        <br/>
        <div className = "Time">
          <h2>Monthly</h2>
          {
            monthlyTasks.map(t => {
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