import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';

const CheckOut = () => {

    const {serviceId} = useParams();
    const [service, setService] = useState({});
    const [user] = useAuthState(auth);

    // const [user, setUser] = useState({
    //     name: "Nur",
    //     email: "nurtesla@gmail.com",
    //     address: 'Dhaka',
    //     phone: '017111111111'
    // });

    // const handleAddressChange = e =>{
    //     console.log(e.target.value);
    //     const {address, ...rest} = user;
    //     const newAddress = e.target.value;
    //     const newUser = {address: newAddress,...rest};
    //     console.log(newUser);
    //     setUser(newUser);
    // }

    const handlePlaceOrder = e =>{
        e.preventDefault();
        const order = {
            userName: user.displayName,
            service: service.name,
            serviceId: serviceId,
            address: e.target.address.value,
            phone: e.target.phone.value,
        }
        axios.post('http://localhost:5000/order', order)
        .then(res =>{
            const {data} = res;
            if(data.insertedId){
                alert('Order booked')
                e.target.reset();
            }
        })
    }

    useEffect(()=>{
        const url = `http://localhost:5000/service/${serviceId}`

        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))

    },[serviceId])


    return (
        <div className='container mt-5 d-flex'>
            <div className='mx-auto mt-5 rounded border p-5 shadow'>
                <h2>{service.name}</h2>
                <img className='rounded shadow' src={service.img} alt="" />
                <h4 className='mt-3'>Price: {service.price}$</h4>
            </div>
            <form onSubmit={handlePlaceOrder} className='mx-auto w-50 mt-5 rounded border p-5 shadow' action="">
                <input className='mb-3 w-100' type="text" value={user.displayName} name="name" id="" placeholder='Name' required readOnly disabled/>
                <br />
                <input className='mb-3 w-100' type="email"  name="email" value={user.email} id="" placeholder='Email' required readOnly disabled/>
                <br />
                <input className='mb-3 w-100' type="text" name="service" id="" value={service.name} placeholder='Service' required readOnly disabled/>
                <br />
                <input className='mb-3 w-100' type="text" name="address" id="" o
                 placeholder='Address' required autoComplete='off'/>
                <br />
                <input className='mb-3 w-100' type="number" name="phone" id="" placeholder='Phone Number' required/>
                <br />
                <input className='bg-primary btn text-white mt-3' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default CheckOut;