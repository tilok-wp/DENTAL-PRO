import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    return (
        <div className='container mx-auto py-28'>
            <h3 className="my-5 text-center text-3xl uppercase">Please login</h3>

            <div className='shadow shadow-blue-500/40 hover:shadow-indigo-500/40 mx-auto md:w-1/2 py-8  rounded-lg bg-slate-50'>
                <form className='p-5 w-full'>
                    <input type="email" name="email" id="email" placeholder='Write email' required className='shadow p-5 block w-full mb-5 rounded-lg' />
                    <input type="password" name="password" id="password" placeholder='write password' required className='shadow p-5 block w-full mb-5 rounded-lg' />
                    <input type="submit" value="Submit" className='bg-cyan-500 hover:bg-cyan-800 px-9 py-3 mt-3 mx-auto text-white  rounded block' />
                </form>
                <p>Are you new user?<Link className='font-bold ml-3' to={'/register'}>Please register </Link> </p>

                <SocialLogin></SocialLogin>

            </div>
        </div>
    );
};

export default Login;