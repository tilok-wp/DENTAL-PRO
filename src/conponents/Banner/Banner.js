import React from 'react';
import bannerImage from '../../images/banner-image.png'

const Banner = () => {
    return (
        <section className='md:grid grid-cols-2'>
            <div className='flex flex-col justify-center p-5 md:py-5'>
                <h2 className='text-3xl font-medium decoration-gray-600 uppercase'>Proffesional & Family Dental Care</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi totam nihil ipsam doloribus autem eveniet, corporis voluptatum dolor, atque aspernatur numquam aliquid id asperiores quae labore. Optio at nobis ipsam.    </p>
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