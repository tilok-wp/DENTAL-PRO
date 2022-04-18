import React from 'react';
import loadingImage from '../../images/loading.gif'

const Spinner = () => {
    return (
        <div className='py-20 flex justify-center items-center'>
            <img src={loadingImage} alt="" />
        </div>
    );
};

export default Spinner;