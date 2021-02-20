
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
    const user = useSelector(state => state.user.user.isUser);
    const cartItems = useSelector(state => state.cart.cart);
    const totalItems = cartItems.reduce((a, c) => a + c.count, 0);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };
    return (
        <header>
            <SearchBox />
            <span > <Link to="/" className="logo" ><h2>MIMO</h2></Link></span>
            <Link to="/" className="Home-link" >  Home</Link>
            {user ? (
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
                    <div className="cart-and-account">
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
