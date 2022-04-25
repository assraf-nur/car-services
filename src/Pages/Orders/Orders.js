import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(()=>{
        // show individual data for individual user
        const email = user.email;
        const url = `http://localhost:5000/orders?${email}`;
         fetch(url)
         .then(res => res.json())
         .then(data => setOrders(data))
    },[user])

    return (
        <div className='container mt-5 mx-auto'>
            <h2>Your Orders: {orders.length}</h2>
        </div>
    );
};

export default Orders;