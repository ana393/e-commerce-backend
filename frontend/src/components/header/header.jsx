/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logout } from '../../redux/actions/userAction';
import SearchBox from '../search/search.jsx';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './header.scss';


const Header = () => {
    const user = useSelector(state => state.user.user);
    const cartItems = useSelector(state => state.cart.cart);
    const Admin = user.isUser?.role === 'admin';
    const totalItems = cartItems.reduce((a, c) => a + c.count, 0);

    return (
        <header>
            <SearchBox />
            <span className="logo"> <NavLink to="/" exact><h2>MIMO</h2></NavLink>  </span>

            {user.isUser ? (
                <div className="user">
                    <span>Hello {user.isUser.name} </span>
                    <span onClick={() => logout()}> Sign Out</span>
                    <Link to="/updateProfile">Profile</Link>
                    {Admin && <Link to='/admin'>/ Dashboard</Link>}
                    <NavLink to='/cart'>
                        <div className="counter">({totalItems})</div>
                        <ShoppingCartOutlined />
                    </NavLink>

                </div>
            ) : (
                    <div className="newUser">

                        <NavLink to='/cart'>
                            <div className="counter">({totalItems})</div><ShoppingCartOutlined />
                        </NavLink>
                        <NavLink to="/signup">SignUp</NavLink>
                        <NavLink to="/signin">SignIn</NavLink>
                    </div>
                )}
        </header>
    )
}
export default Header;
