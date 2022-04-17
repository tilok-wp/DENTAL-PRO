import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../images/Denti-logo.png'

const Header = () => {
    return (
        <header className='text-center py-2 bg-slate-100 sticky top-0 z-10'>
            <div className='container mx-auto lg:flex justify-between items-center'>
                <Link to={'/'}> <img src={logo} alt="" /> </Link>
                <nav >
                    <CustomLink to={'/'}>Home</CustomLink>
                    <CustomLink to={'/services'}>Services</CustomLink>
                    <CustomLink to={'/Reviews'}>Reviews</CustomLink>
                    <CustomLink to={'/blogs'}>Blogs</CustomLink>
                    <CustomLink to={'/about'}>About</CustomLink>
                    <CustomLink to={'/contact'}>contact</CustomLink>
                    <Link to='/login'> Sign in </Link>
                </nav>

            </div>
        </header>
    );
};

export default Header;