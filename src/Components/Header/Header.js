import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
import CustomLink from '../CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <nav className='header'>
            <Link to="/"><img src={logo} alt="" /></Link>
            <div className='hidden md:flex mr-2'>
                {/* <Link to="/">Home</Link> */}
                <CustomLink to="/shop">Shop</CustomLink>
                <CustomLink to="/orders">Orders</CustomLink>
                <CustomLink to="/inventory">Inventory</CustomLink>
                <CustomLink to="/about">About us</CustomLink>
                {
                    !user ?
                        <CustomLink to="/login">Login</CustomLink>
                        :
                        <CustomLink onClick={() => signOut(auth)} to="/home">Logout</CustomLink>
                }
            </div>
            <button className='md:hidden mr-4'>
                <FontAwesomeIcon className='text-white' icon={faList}></FontAwesomeIcon>
            </button>
        </nav>
    );
};

export default Header;