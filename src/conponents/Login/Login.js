import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'

import SocialLogin from '../SocialLogin/SocialLogin';
import Spinner from '../Spinner/Spinner';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const resetEmailRef = useRef('');
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleLoginSubmit = async (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        await signInWithEmailAndPassword(email, password)

    }

    if (loading || sending) {
        return <Spinner></Spinner>
    }

    if (user) {
        navigate(from, { replace: true });
    }
    let errorText
    if (error) {
        errorText = <p className='text-red-800 p-3'>Error: {error?.message}</p>
    }
    const passwordResetHandale = async () => {
        const email = resetEmailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent rest email. If email in our register list.');
        }
        else {
            toast('please enter your email address');
        }
    }
    return (
        <div className='container mx-auto py-16 text-center'>
            <h3 className="my-5 text-center text-3xl uppercase">Please login</h3>

            <div className='shadow shadow-blue-500/40 hover:shadow-indigo-500/40 mx-auto md:w-1/2 py-8  rounded-lg bg-slate-50'>
                <form onSubmit={handleLoginSubmit} className='p-5 w-full'>
                    <input type="email" ref={resetEmailRef} name="email" id="email" placeholder='Write email' required className='shadow p-5 block w-full mb-5 rounded-lg' />
                    <input type="password" name="password" id="password" placeholder='write password' required className='shadow p-5 block w-full mb-5 rounded-lg' />
                    <input type="submit" value="Submit" className='bg-cyan-500 hover:bg-cyan-800 px-9 py-3 mt-3 mx-auto text-white  rounded block' />
                </form>
                <p>Are you new user?<Link className='font-bold ml-3' to={'/register'}>Please register </Link> </p>
                <p>Forget password? <button onClick={passwordResetHandale} className='font-bold ml-3'>Reset password </button> </p>
                {errorText}
                <SocialLogin></SocialLogin>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;