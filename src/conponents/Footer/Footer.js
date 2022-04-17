import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-gray-800 text-center py-8'>
            <p className='text-white'><Link to={'/'}>DentiPro</Link> copywright &copy;{new Date().getFullYear()} all right reserved. </p>
        </footer>
    );
};

export default Footer;