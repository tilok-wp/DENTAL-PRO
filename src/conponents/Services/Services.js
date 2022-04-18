
import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices()
    return (
        <div className='py-24 px-5 md:px-0 bg-neutral-50'>
            < h3 className='text-center text-3xl font-medium decoration-gray-600 uppercase' > All services list </h3>
            < div className='container mx-auto grid md:grid-cols-3 gap-8 py-8' >

                {
                    services.map(item => <Service
                        key={item.id}
                        item={item}
                    ></Service>)
                }
            </div >
        </div >
    );
};

export default Services;