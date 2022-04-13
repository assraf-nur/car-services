import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    console.log(serviceId);
    return (
        <div className='text-center mt-5'>
            <h2>Welcome to detail: {serviceId}</h2>
            <Link to='/checkout'>
                <button className='btn btn-primary'>Proceed to Check Out</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;