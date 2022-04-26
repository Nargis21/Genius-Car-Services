import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices()

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?')
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)
                })
        }
    }
    return (
        <div className='text-center'>
            <h1>Manage Your Services</h1>
            {
                services.map(service => <h5 key={service._id}>{service.name} <button onClick={() => handleDelete(service._id)}>X</button></h5>)
            }
        </div>
    );
};

export default ManageServices;