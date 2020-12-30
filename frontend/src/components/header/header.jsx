/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/userAction';
import SearchBox from '../search/search.jsx';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './header.scss';


const Header = ({ user, cartItems }) => {

    const Admin = user.isUser?.role === 'admin';

    return (
        <header>
            <SearchBox />
            <span className="logo"> <NavLink to="/" exact><h2>MIMO</h2></NavLink>  </span>

            {user.isUser ? (
                <div className="user">
                    <span>Hello {user.isUser.name ? user.isUser.name : user.isUser.email} </span>
                    <span onClick={() => logout()}> Sign Out</span>
                    {Admin && <Link to='/admin'>/ Dashboard</Link>}
                    <NavLink to='/cart'>
                        <div className="counter">({cartItems.reduce((a, c) => a + c.count, 0)})</div>
                        <ShoppingCartOutlined />
                    </NavLink>


                </div>
            ) : (
                    <div className="newUser">

                        <NavLink to='/cart'>
                            <div className="counter">({cartItems.reduce((a, c) => a + c.count, 0)})</div><ShoppingCartOutlined />
                        </NavLink>
                        <NavLink to="/signup">SignUp</NavLink>
                        <NavLink to="/signin">SignIn</NavLink>
                    </div>
                )}
        </header>
    )
}

const mapStateToProps = (state) => ({ user: state.user.user, cartItems: state.cart.items })
export default connect(mapStateToProps)(Header);
