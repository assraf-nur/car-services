import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();
    
    const handleDelete = id =>{
        const proceed = window.confirm("are you sure bro  ??");
        if(proceed){
            const url = `http://localhost:5000/service/${id}`;
            fetch(url)
            .then(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining); 
            })
        }
    }
    return (
        <div className='container mx-auto'>
            <h2>Manage your services</h2>
            {
                services.map(service => <div className='mt-2 border shadow rounded p-2 w-25 mx-auto' key={service._id}>
                    <h4>{service.name} <button onClick={() => handleDelete(service._id)} className='btn btn-danger'>X</button> </h4>
                </div>)
            }
        </div>
    );
};

export default ManageServices;