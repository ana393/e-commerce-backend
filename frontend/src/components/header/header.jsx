import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
const Header = () => {
    return (
        <header>
            <span className="logo"><h2>MIMO</h2></span>
            <div className="user">
                <NavLink to="/signup">SignUp</NavLink>
                <NavLink to="/signin">SignIn</NavLink>
            </div>
        </header>
    )
}

export default Header;
