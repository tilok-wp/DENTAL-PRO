import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { serviceImage, price, serviceName, serviceDesc } = props.item
    return (
        <div className='shadow border-2 border-indigo-500/10 rounded-lg text-center overflow-hidden'>
            <img src={serviceImage} alt="" className='w-full' />
            <div className='mx-8 relative pb-20'>
                <h3 className='text-2xl mt-8 mb-5' >{serviceName}</h3>
                <p>{serviceDesc}</p>
                <div className='text-center flex items-center justify-between absolute bottom-0 right-0 left-0'>
                    <span className='text-lg font-medium'> Price: <strong className='text-2xl'> ${price}</strong> </span>
                    <Link to={'/checkout'} className=' inline-block items-center font-medium py-3 px-9 rounded-lg bg-neutral-200 my-2 hover:bg-cyan-500 '>Add to cart</Link>
                </div>

            </div>
        </div>
    );
};

export default Service;