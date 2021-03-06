import React from 'react';

const Task = (props) => {
    return (
        <div className = "Tasks">
          <div className="taskContainer">
            <h3>Title:</h3>
              <p>{props.title}</p>
            <h3>Due Date:</h3>
              <p>{props.dueDate}</p>
            <h3>Description:</h3>
              <p>{props.description}</p>
          </div>
        </div>
    )

}

export default Task;