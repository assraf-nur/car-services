import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, name, img, description, price} = service;


    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }


    return (
        <div className='service card p-2'>
            <img className='service-image' src={img} alt="" />
            <div className='p-2 fw-bold'>
                <h2>{name}</h2>
                <p>Price: {price}$</p>
                <p><small>{description}</small></p>
            </div>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>BOOK {name} NOW</button>
        </div>
    );
};

export default Service;