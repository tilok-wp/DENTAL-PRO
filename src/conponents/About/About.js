import React from 'react';
import myPhoto from '../../images/myPhoto.jpg'

const About = () => {
    return (
        <div className='py-24'>
            < h3 className='text-center text-3xl font-medium decoration-gray-600 uppercase mb-5' > About Goal </h3>

            <div className='container text-center w-1/2 mx-auto'>
                <img src={myPhoto} className="rounded-full shadow border-x-2 p-1 mx-auto" alt="" />

                <h3 className='text-3xl mt-5'>I'm Tilok Paul</h3>
                <h6>My Goal is want to be a Full stack web developer</h6>
                <p>Full stack web developer is target career my hobby and my passion. I too mutch trying to  </p>

            </div >
        </div>
    );
};

export default About;