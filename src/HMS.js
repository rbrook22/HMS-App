import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div>
            <Link to="/"><h1>Home Management System</h1></Link>
            <Link to="/hms"><input type="button" value="HMS"/></Link>
            <Link to="/med"><input type="button" value="MED"/></Link>
            <Link to="/financial"><input type="button" value="$$$"/></Link>
        </div>

    );
}

export default NavBar;