import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='header'>
            <button className='md:hidden'>
                <FontAwesomeIcon className='text-white' icon={faList}></FontAwesomeIcon>
            </button>
            <Link to="/"><img src={logo} alt="" /></Link>
            <div className='flex'>
                {/* <Link to="/">Home</Link> */}
                <CustomLink to="/shop">Shop</CustomLink>
                <CustomLink to="/orders">Orders</CustomLink>
                <CustomLink to="/inventory">Inventory</CustomLink>
                <CustomLink to="/about">About us</CustomLink>
            </div>
        </nav>
    );
};

export default Header;