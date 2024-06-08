import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <div className='nav-center'>
            <nav className="navbar">
                <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
                    {MenuItems.map((item, index) => (
                        <li key={index} className='nav-item'>
                            <Link className={item.cName} to={item.url}>
                                <i className={item.icon}></i>{item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button className='menu-toggle' onClick={toggleMenu}>
                    <span className="menu-icon">&#9776;</span>
                </button>
            </nav>
        </div>
    );
};

export default Navbar;
