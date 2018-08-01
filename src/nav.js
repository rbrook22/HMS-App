import React from 'react';
import {Link} from 'react-router-dom';

const Nav = (props) => {
    return (
        <div>
            <Link to="/weekly"><input type="button" className="btn" value="Weekly Items"/></Link>
            <Link to="/monthly"><input type="button" className="btn" value="Monthly Items"/></Link>
            <Link to="/yearly"><input type="button" className="btn" value="Yearly Items"/></Link>
        </div>
    );
}

export default Nav;