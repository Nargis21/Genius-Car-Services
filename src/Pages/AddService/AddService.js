import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = 'http://localhost:5000/service'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    };
    return (
        <div className='w-50 mx-auto'>
            <h1>Please add user!</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' className='mb-2' {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder='Description' className='mb-2' {...register("description")} />
                <input placeholder='Photo URL' className='mb-2' {...register("img")} />
                <input placeholder='Price' className='mb-2' type="number" {...register("price")} />
                <input className='mb-2' type="submit" value='Add Service' />
            </form>
        </div>
    );
};

export default AddService;