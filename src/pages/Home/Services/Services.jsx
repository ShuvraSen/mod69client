import React, { useEffect, useState } from 'react';
import Servicecard from './Servicecard';

const Services = () => {

    const [services,setServices]=useState([])

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

console.log(services);

    return (
        <div>
            <div className='text-center mb-10 mt-10'>
                <h2 className='text-4xl'>Service</h2>
                <h1 className='text-7xl'>Our Service Area</h1>
                <p className='text-2xl'>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <h1 className='text-4xl'>total length of services : {services.length} </h1> 

            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-10'>
               
                {
                        services.map(service=> <Servicecard key={service._id} service={service}></Servicecard>)
                }
            </div>
        </div>
    );
};

export default Services;