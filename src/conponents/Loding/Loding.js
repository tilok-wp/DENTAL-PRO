import React from 'react';
import lodingImage from '../../images/loading.gif'

const Loding = () => {
    return (
        <div className='py-20 flex justify-center items-center'>
            <img src={lodingImage} alt="" />
        </div>
    );
};

export default Loding;