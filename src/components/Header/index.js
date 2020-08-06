
import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Header = () => {
    return (
        <div className="topnav">
            <NavLink to="/user" exact={true} >Serach via UserName</NavLink>
            <NavLink to="/repo" >Serach via Repositories</NavLink>
        </div>
    );
};

export default Header;