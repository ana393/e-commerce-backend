/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/userAction';
import './header.scss';
const Header = props => {
    console.log('user conectado ?', props.user.token);


    return (
        <header>
            <span className="logo"><NavLink to="/" exact><h2>MIMO</h2></NavLink> </span>
            {props.user.user.isUser ? (
                <div>
                    <span>{props.user.user.isUser.name ? props.user.user.isUser.name : props.user.user.isUser.email}     Bienvenid@</span>
                    <NavLink to="/">LogOut</NavLink>
                </div>)
                : (
                    <div className="user">
                        <NavLink to="/signup">SignUp</NavLink>
                        <NavLink to="/signin">SignIn</NavLink>
                    </div>)}
        </header>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}
const mapStateToProps = (state) => ({ user: state.user })
export default connect(mapStateToProps, mapDispatchToProps)(Header);
