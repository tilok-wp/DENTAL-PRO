import React from 'react';
import gooleLogo from '../../images/google.png'
import facebookLogo from '../../images/facebook.png'
import githubLogo from '../../images/github.png'

const SocialLogin = () => {
    return (
        <div>
            <p>Forget password? <button className='font-bold ml-3'>Reset password </button> </p>
            <div className='flex items-center p-5'>
                <span className='bg-cyan-500 h-px w-full mr-3'></span>
                OR
                <span className='bg-cyan-500 h-px w-full ml-3'></span>
            </div>
            <button
                className='inline-flex items-center py-3 px-9 rounded-lg bg-neutral-200 mx-2'>
                <img className='mr-3' src={gooleLogo} alt="" />
                Google Login
            </button>
            <button
                className='inline-flex items-center py-3 px-9 rounded-lg bg-neutral-200 mx-2'>
                <img className='mr-3' src={facebookLogo} alt="" />
                Facebook Login
            </button>
            <button
                className='inline-flex items-center py-3 px-9 rounded-lg bg-neutral-200 mx-2'>
                <img className='mr-3' src={githubLogo} alt="" />
                Github Login
            </button>
        </div>
    );
};

export default SocialLogin;