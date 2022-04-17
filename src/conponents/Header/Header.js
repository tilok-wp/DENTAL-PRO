import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            header page
            <Link to='/Home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/blog'>Blog</Link>
        </header>
    );
};

export default Header;