import React from 'react';
import Task from './Task';
import Data from './data.json';

class WeeklyTask extends React.Component {
    render() {
        let weeklyTasks = Data.HMS.Weekly;
        return(
            <div className = "Time">
            <h2>Weekly</h2>
            <div className="timeContent">
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
            </div>
            </div>
        );
    }
}

export default WeeklyTask;
