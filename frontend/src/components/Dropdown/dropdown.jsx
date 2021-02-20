import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './menuItems';
import { logout } from '../../redux/actions/userAction';
import './dropdown.scss';



const Dropdown = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <ul
                onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link
                                className={item.cName}
                                to={item.path}
                                onClick={() => setClick(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
                <span className="dropdown-link" onClick={() => logout()}> Sign Out</span>
            </ul>
        </>
    )
}

export default Dropdown;
