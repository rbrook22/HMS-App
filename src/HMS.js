import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div>
            <Link to="/"><h1>Home Management System</h1></Link>

            <Link to="/home"><input type="button" value="HMS"/></Link>
            <Link to="/about"><input type="button" value="MED"/></Link>
            <Link to="/puppies"><input type="button" value="$$$"/></Link>
        </div>

    );
}

export default NavBar;