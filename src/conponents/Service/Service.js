import React from 'react';

const Service = (props) => {
    const { serviceImage, price, serviceName, serviceDesc } = props.item
    return (
        <div>
            <img src={serviceImage} alt="" />
            <p>Price: {price}</p>
            <h3>{serviceName}</h3>
            <p>{serviceDesc}</p>
            <button>Add to cart</button>
        </div>
    );
};

export default Service;