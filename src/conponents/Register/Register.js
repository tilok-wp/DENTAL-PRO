import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth'
import Spinner from '../Spinner/Spinner';

const Register = () => {
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleRegisterSubmit = async (event) => {
        event.preventDefault()
        const displayName = event.target.displayName.value
        const email = event.target.email.value
        const password = event.target.password.value
        // console.log(displayName, email, password)
        createUserWithEmailAndPassword(email, password)
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
        navigate('/home')

    }
    if (loading) {
        return <Spinner></Spinner>
    }

    let errorText
    if (error) {
        errorText = <p className='text-red-800 p-3'>Error: {error?.message}</p>
    }

    return (
        <div className='container mx-auto py-16 text-center'>
            <h3 className="my-5 text-center text-3xl uppercase">Please Register</h3>

            <div className='shadow shadow-blue-500/40 hover:shadow-indigo-500/40 md:w-1/2 mx-auto py-8  rounded-lg bg-slate-50'>
                <form className='p-5' onSubmit={handleRegisterSubmit}>
                    <input type="text" name="displayName" id="displayName" placeholder='Full name' className='shadow p-5 block w-full mb-5 rounded-lg' />
                    <input type="email" name="email" id="email" placeholder='Write email' required className='shadow p-5 block w-full mb-5 rounded-lg' />
                    <input type="password" name="password" id="password" placeholder='write password' required className='shadow p-5 block w-full mb-5 rounded-lg' />
                    <input type="submit" value="Submit" className='bg-cyan-500 hover:bg-cyan-800 px-9 py-3 mt-3 mx-auto text-white  rounded block' />
                </form>
                <p>Already registered <Link className='font-bold ml-3' to={'/login'}>Login </Link> </p>
                <SocialLogin></SocialLogin>
                {errorText}
            </div>
        </div>
    );
};

export default Register;