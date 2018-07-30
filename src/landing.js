import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div>
            <Link to="/"><h1>Home Management System</h1></Link>
            <Link to="/hms"><input type="button" value="Home Items"/></Link>
            <Link to="/med"><input type="button" value="Medical Visits"/></Link>
            <Link to="/financial"><input type="button" value="Finances"/></Link>
        </div>

    );
}

export default NavBar;