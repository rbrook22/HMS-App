import React from 'react';

const med = (props) => {
    return(
        <div className="medMain">
            <div className="appointments">
                <h1>Appointments</h1>
            </div>

            <div className="dropIn">
                <h1>Drop-In Appointments</h1>
            </div>
            <div className="completed">
                <h1>Completed Visits</h1>
            </div>
        </div>
    );
}

export default med;