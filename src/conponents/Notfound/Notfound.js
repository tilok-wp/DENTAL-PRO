import React from 'react';
import { Link } from 'react-router-dom';
import notFoundimg from '../../images/404.png'

const Notfound = () => {
    return (
        <div className='text-center py-48'>
            <img src={notFoundimg} alt="" className='mx-auto' />
            <p className='text-2xl uppercase'>Page not found.</p>
            <Link className='bg-cyan-500 hover:bg-cyan-800 px-5 py-2 mt-3 text-white  rounded inline-block' to={'/'}>Back to Home</Link>
        </div>
    );
};

export default Notfound;