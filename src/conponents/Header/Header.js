import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../images/Denti-logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { signOut } from 'firebase/auth';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const [open, setOpen] = useState(false)
    const [user] = useAuthState(auth)
    let errorText
    const handleSignOut = () => {
        signOut(auth);
    }


    return (
        <header className='text-center py-2 bg-slate-100 sticky top-0 z-10'>
            <div className='container mx-auto lg:flex justify-between items-center relative z-10 px-5'>
                <Link to={'/'}> <img src={logo} alt="" /> </Link>
                <nav className={`flex flex-col md:flex-row absolute md:static w-full md:w-fit bg-cyan-50 md:bg-transparent duration-500 ease-in z-0 ${open ? 'top-50' : 'top-[-250px]'}`}>
                    <CustomLink to={'/'}>Home</CustomLink>
                    <CustomLink to={'/services'}>Services</CustomLink>
                    <CustomLink to={'/blogs'}>Blogs</CustomLink>
                    <CustomLink to={'/about'}>About</CustomLink>
                    <CustomLink to={'/contact'}>contact</CustomLink>
                    <div className='fixed top-3 right-0 flex items-center md:static z-50'>
                        {
                            user ? <button
                                className='bg-cyan-500 hover:bg-cyan-800 px-3 py-2 ml-3 text-white  rounded-lg'
                                onClick={handleSignOut}>Sign out</button> : <Link
                                    className='bg-cyan-500 hover:bg-cyan-800 px-3 py-2 ml-3 text-white  rounded-lg'
                                    to='/login'> Sign in </Link>
                        }
                        <div onClick={() => setOpen(!open)} className='w-8 h-8 md:hidden ml-5 mr-5'>
                            {open ? <XIcon></XIcon> : <MenuAlt1Icon></MenuAlt1Icon>}
                        </div>
                    </div>
                </nav>

            </div>
        </header>
    );
};

export default Header;