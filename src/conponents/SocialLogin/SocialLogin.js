import React from 'react';
import gooleLogo from '../../images/google.png'
import facebookLogo from '../../images/facebook.png'
import githubLogo from '../../images/github.png'
import auth from '../../firebase.init';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loding from '../Loding/Loding';

const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGithub, loadingGithub, errorGithub] = useSignInWithGithub(auth);
    const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);



    if (userGoogle || userFacebook || userGithub) {
        navigate('/home');
    }
    let errorText
    if (errorGoogle || errorGithub || errorFacebook) {
        errorText = <p className='text-red-800 p-3'>Error: {errorGoogle?.message} {errorGithub?.message} {errorFacebook?.message}</p>
    }
    if (loadingGoogle || loadingGithub || loadingFacebook) {
        return <Loding></Loding>
    }

    return (
        <div>
            <p>Forget password? <button className='font-bold ml-3'>Reset password </button> </p>
            <div className='flex items-center p-5'>
                <span className='bg-cyan-500 h-px w-full mr-3'></span>
                OR
                <span className='bg-cyan-500 h-px w-full ml-3'></span>
            </div>

            <button
                onClick={() => signInWithGoogle()}
                className='inline-flex items-center py-3 px-9 rounded-lg bg-neutral-200 mx-2 my-2'>
                <img className='mr-3' src={gooleLogo} alt="" />
                Google Login
            </button>
            <button
                onClick={() => signInWithFacebook()}
                className='inline-flex items-center py-3 px-9 rounded-lg bg-neutral-200 mx-2 my-2'>
                <img className='mr-3' src={facebookLogo} alt="" />
                Facebook Login
            </button>
            <button
                onClick={() => signInWithGithub()}
                className='inline-flex items-center py-3 px-9 rounded-lg bg-neutral-200 mx-2 my-2'>
                <img className='mr-3' src={githubLogo} alt="" />
                Github Login
            </button>
            {errorText}
        </div>
    );
};

export default SocialLogin;