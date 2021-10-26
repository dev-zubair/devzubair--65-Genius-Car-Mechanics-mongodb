import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, price, description, img } = service;
    return (
        <div id="services" className="service pb-3">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>Price: ${price}</h3>
            <p>{description}</p>
            <Link to={`/booking/${_id}`}><button className="btn-warning fs-5 fw-bolder">Book {name.toLowerCase()}</button></Link>
        </div>
    );
};

export default Service;