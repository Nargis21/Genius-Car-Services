import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { _id, name, img, price, description } = service
    const navigate = useNavigate()
    const handleNavigateServiceDetails = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => handleNavigateServiceDetails(_id)} className='btn  btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;