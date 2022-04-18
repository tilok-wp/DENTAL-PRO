import React from 'react';
import bannerImage from '../../images/banner-image.png'

const Banner = () => {
    return (
        <section className='md:grid grid-cols-2 container mx-auto'>
            <div className='flex flex-col justify-center px-5 py-20 md:py-5'>
                <h2 className='text-3xl font-medium decoration-gray-600 uppercase'>Dental PRO is Professional and Family Dental Care service</h2>
                <p className='mt-2'>Are you looking for happy smile teeth dental care services? Yes are in wright place. I providing dental services for your's and your family member. Please check our services and contact if any query. </p>
                <div>
                    <a href="#contact" className='bg-cyan-500 hover:bg-cyan-800 px-9 py-3 mt-3 mx-auto text-white rounded inline-block'>Contact now</a>

                </div>
                <div>
                </div>
            </div>
            <div className='flex justify-center'>
                <img src={bannerImage} alt="" />
            </div>
        </section>
    );
};

export default Banner;