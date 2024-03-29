import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://car-doctor-server-silk-iota.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    })

    return (
        <div>
            <div className='text-center my-4'>
                <h3 className='text-2xl font-bold text-red-500'>Services</h3>
                <h3 className='text-5xl font-semibold my-4'>Our Services Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;