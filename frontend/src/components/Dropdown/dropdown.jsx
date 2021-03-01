import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './menuItems';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/userAction';

import './dropdown.scss';



const Dropdown = ({ user }) => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const Admin = user.isUser?.role === 'admin';

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

                })
                }
                {Admin && <span className="admin-link"> <Link to='/admin'>Dashboard</Link></span>}
                <span className="dropdown-link" onClick={() => logout()}> Sign Out</span>
            </ul>
        </>
    )
}
const mapStateToProps = state => ({ user: state.user.user });
export default connect(mapStateToProps)(Dropdown);
