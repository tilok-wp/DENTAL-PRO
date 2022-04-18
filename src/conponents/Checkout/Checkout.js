import React, { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { checkoutId } = useParams()
    const handleAppoient = (event) => {
        event.preventDefault()
        toast(`Your appointment booking successful. with this <br> name: ${event.target.fullName.value} Date:${event.target.date.value}`);
    }
    return (
        <div>
            <div className='py-20 flex justify-center items-center flex-col'>
                <h3 className='my-5 text-center text-3xl uppercase'>Book appointment</h3>
                <h3 className='text-center text-2xl'>Service id: {checkoutId}</h3>
                <div className='md:w-1/2 w-full bg-stone-50 rounded-lg'>
                    <form className='p-5 w-full' onSubmit={handleAppoient}>
                        <input type="text" name="fullName" placeholder='Patient name' required className='shadow p-5 block w-full mb-5 rounded-lg' />
                        <input type="date" name="date" placeholder='Select date' required className='shadow p-5 block w-full mb-5 rounded-lg' />
                        <textarea name="massage" placeholder='Write some massage here' className='shadow p-5 block w-full mb-5 rounded-lg h-48' />
                        <input type="submit" value="Appoint Now" className='bg-cyan-500 hover:bg-cyan-800 px-9 py-3 mt-3 mx-auto text-white  rounded block' />
                    </form>

                </div>
            </div>
            {/* Tost container must use to show tost */}
            <ToastContainer />
        </div>
    );
};

export default Checkout;