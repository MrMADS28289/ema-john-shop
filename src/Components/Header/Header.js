import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <button>
                <FontAwesomeIcon className='text-white' icon={faList}></FontAwesomeIcon>
            </button>
            <Link to="/"><img src={logo} alt="" /></Link>
            <div>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders Reviw</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About us</Link>
            </div>
        </nav>
    );
};

export default Header;