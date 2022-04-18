import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../images/Denti-logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)
    let errorText
    const handleSignOut = () => {
        signOut(auth);
    }


    return (
        <header className='text-center py-2 bg-slate-100 sticky top-0 z-10'>
            <div className='container mx-auto lg:flex justify-between items-center'>
                <Link to={'/'}> <img src={logo} alt="" /> </Link>
                <nav >
                    <CustomLink to={'/'}>Home</CustomLink>
                    <CustomLink to={'/services'}>Services</CustomLink>
                    <CustomLink to={'/blogs'}>Blogs</CustomLink>
                    <CustomLink to={'/about'}>About</CustomLink>
                    <CustomLink to={'/contact'}>contact</CustomLink>
                    <>
                        {
                            user ? <button
                                className='bg-cyan-500 hover:bg-cyan-800 px-3 py-2 ml-3 text-white  rounded-lg'
                                onClick={handleSignOut}>Sign out</button> : <Link
                                    className='bg-cyan-500 hover:bg-cyan-800 px-3 py-2 ml-3 text-white  rounded-lg'
                                    to='/login'> Sign in </Link>
                        }
                    </>
                </nav>

            </div>
        </header>
    );
};

export default Header;