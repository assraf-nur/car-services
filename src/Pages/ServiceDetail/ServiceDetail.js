import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/service/${serviceId}`

        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))

    },[serviceId])

    console.log(serviceId);
    return (
        <div className='text-center mt-5'>
            <h2>Welcome to detail of: {service.name}</h2>
            <Link to={`/checkOut/${serviceId}`}>
                <button className='btn btn-primary'>Proceed to Check Out</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;