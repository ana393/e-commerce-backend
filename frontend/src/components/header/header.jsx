
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logout } from '../../redux/actions/userAction';
import SearchBox from '../search/search.jsx';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './header.scss';


const Header = () => {

    const user = useSelector(state => state.user.user.isUser);
    const cartItems = useSelector(state => state.cart.cart);
    const totalItems = cartItems.reduce((a, c) => a + c.count, 0);

    return (
        <header>
            <SearchBox />
            <span > <NavLink to="/" exact><h2>MIMO</h2></NavLink>  </span>

            {user ? (
                <div className="user">
                    <span>Hello {user.name} </span>
                    <span onClick={() => logout()}> Sign Out</span>
                    <Link to={`/users/${user._id}`}>Profile</Link>
                    {user.role === 'admin' && <Link to="/admin">/ Dashboard</Link>}
                    <NavLink to="/cart">
                        <div className="counter">({totalItems})</div>
                        <ShoppingCartOutlined />
                    </NavLink>

                </div>
            ) : (
                    <div className="newUser">
                        <span>Hello User </span>
                        <NavLink to="/cart">
                            <div className="counter">({totalItems})</div><ShoppingCartOutlined />
                        </NavLink>
                        <NavLink to="/signup">SignUp</NavLink>
                        <NavLink to="/signin">SignIn</NavLink>
                    </div>
                )}
        </header>
    )
}
/*const mapStateToProps = (state) => ({
    user: state.user.user,
});
const connectedHeader = connect(mapStateToProps, null)(Header);*/
export default Header;
