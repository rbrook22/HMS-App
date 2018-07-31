import React, { Component } from 'react';
import './App.css';
import Task from './Task';


class App extends Component {
  render() {
    return ( 
      <div className = "App" >
        <h1>ALL IN ONE HMS APPLICATION</h1>
        <div className = "Time">
          <h2>Weekly</h2>
          <Task />
          <Task />
          <Task />
          <div className = "Tasks">
            <h3>Title:</h3>
              <p>Mow the lawn.</p>
            <h3>Due Date:</h3>
              <p>12/18/2018</p>
            <h3>Description:</h3>
              <p>Cut the front and back</p>
          </div>
          <div className = "Tasks">
            <h3>Title:</h3>
              <p>Take out the trash</p>
            <h3>Due Date:</h3>
              <p>12/18/2018</p>
            <h3>Description</h3>
              <p>Take trash to curb</p>
          </div>
        </div>
        <br/>
        <div className = "Time">
          <h2>Monthly</h2>
          <div className = "Tasks">
            <h3>Title:</h3>
              <p>Some Task</p>
            <h3>Due Date:</h3>
              <p>Some Date</p>
            <h3>Description:</h3>
              <p>Some Description</p>
          </div>
          <div className = "Tasks">
            <h3>Title:</h3>
              <p>Some Task</p>
            <h3>Due Date:</h3>
              <p>Some Date</p>
            <h3>Description:</h3>
              <p>Some Description</p>
          </div>
        </div>
        <br/>
        <div className = "Time">
          <h2>Yearly</h2>
          <div className = "Tasks">
            <h3>Title:</h3>
              <p>Some Task</p>
            <h3>Due Date:</h3>
              <p>Some Date</p>
            <h3>Description:</h3>
              <p>Some Description</p>
          </div>
          <div className = "Tasks">
            <h3>Title:</h3>
              <p>Some Task</p>
            <h3>Due Date:</h3>
              <p>Some Date</p>
            <h3>Description:</h3>
              <p>Some Description</p>
          </div>
        </div>
      </div>

    );
  }
}

export default App;