import axios from 'axios'
import React from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css';

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Data has been inserted');
                    reset();
                }
            })
    };
    return (
        <div className="add-service">
            <h2>Please Add Your Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder='Name' />
                <input type="number" {...register("price")} placeholder='Price' />
                <input {...register("description")} placeholder='Description' />
                <input {...register("img")} placeholder='Image URL' />
                <input type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddServices;