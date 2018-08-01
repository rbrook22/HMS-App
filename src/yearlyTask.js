import React from 'react';
import Task from './Task';
import Data from './data.json';

class YearlyTask extends React.Component {
    render(){
        let yearlyTasks = Data.HMS.Yearly;
        return(
            <div className = "Time">
            <h2>Yearly</h2>
            <div className="timeContent">
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

export default YearlyTask;