import React from 'react';

const financial = (props) => {
    return(
        <select name="financial Drop" id="">
            <option value="Expenses">Expenses</option>
            <option value="Savings">Savings</option>
            <option value="spending">Spending</option>
        </select>
    );
}

export default financial;