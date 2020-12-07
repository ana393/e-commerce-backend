/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
//import { logout } from '../../redux/actions/userAction';
import './header.scss';
const Header = props => {
    console.log('user conectado ?', props.user.email);

    return (
        <header>
            <span className="logo"><NavLink to="/" exact><h2>MIMO</h2></NavLink> </span>
            {props.user ?
                <span>{props.user.name ? props.user.name : props.user.email}Bienvenid@</span>
                :
                <div className="user">
                    <NavLink to="/signup">SignUp</NavLink>
                    <NavLink to="/signin">SignIn</NavLink>
                </div>}
        </header>
    )
}
const mapStateToProps = (state) => ({ user: state.user })
export default connect(mapStateToProps)(Header);
