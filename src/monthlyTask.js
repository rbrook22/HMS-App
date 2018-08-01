import React from 'react';
import Task from './Task';
import Data from './data.json';

class MonthlyTask extends React.Component {
    render (){
        let monthlyTasks = Data.HMS.Monthly;
        return(
            <div className = "Time">
            <h2>Monthly</h2>
            <div className="timeContent">
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
            </div>
        );
    }
}

export default MonthlyTask;