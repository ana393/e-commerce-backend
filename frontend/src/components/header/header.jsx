
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchBox from '../search/search.jsx';
import Dropdown from '../Dropdown/dropdown.jsx';
import { Avatar } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import './header.scss';


const Header = () => {
    const [dropdown, setDropdown] = useState(false);
    const user = useSelector(state => state.user.user);
    const cartItems = useSelector(state => state.cart.cart);
    const totalItems = cartItems.reduce((a, c) => a + c.count, 0);

    const onMouseEnter = () => { setDropdown(true); };
    const onMouseLeave = () => { setDropdown(false); };

    return (
        <header>
            <ul>
                <Link to="/" ><h2>MIMO</h2></Link>
                <SearchBox />
            </ul>
            {user.isUser ? (
                <div className="cart-and-account">
                    <Link className="fixed-cart" to="/cart">
                        <span className="cart"><ShoppingCartOutlined /> </span>
                        <span className="cart-items">{totalItems}</span>
                    </Link>
                    <li className="li-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to="/signup" className="fixed account"><Avatar icon={<UserOutlined />} size="large" style={{ backgroundColor: '#9acd32' }} /></Link>
                        {dropdown && <Dropdown />}
                    </li>
                </div>

            ) : (
                <div className="cart-and-account" >
                    <Link className="fixed-cart" to="/cart">
                        <span className="cart"><ShoppingCartOutlined /> </span>
                        <span className="cart-items">{totalItems}</span>
                    </Link>

                    <Link to="/signup" className="fixed account"><Avatar icon={<UserOutlined />} size="large" style={{ backgroundColor: '#9acd32', }} />
                    </Link>
                </div>
            )}
        </header>
    )
}

export default Header;
