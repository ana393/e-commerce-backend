/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/userAction';
import './header.scss';



const Header = props => {
    console.log('user conectado ?', props.user.user.token);
    const Admin = props.user.user.isUser?.role === 'admin';

    return (
        <header>
            <span className="logo"><NavLink to="/" exact><h2>MIMO</h2></NavLink> </span>
            {props.user.user.isUser ? (
                <div className="user">
                    <span> {props.user.user.isUser.name ? props.user.user.isUser.name : props.user.user.isUser.email}     </span>
                    {Admin && <Link to='/admin'>Dashboard</Link>}
                    <button onClick={() => logout()}>LogOut</button>
                </div>)
                : (
                    <div className="newUser">
                        <NavLink to="/signup">SignUp</NavLink>
                        <NavLink to="/signin">SignIn</NavLink>
                    </div>)}
        </header>
    )
}

const mapStateToProps = (state) => ({ user: state.user })
export default connect(mapStateToProps)(Header);
