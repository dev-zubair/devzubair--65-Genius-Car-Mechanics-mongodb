import React, { useEffect, useState } from 'react';

const ManageServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services/')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert("Service deleted Successfully")
                    // service._id !== id  ------------ jei ID ta delete korso oita chara baki ID gulo ke filter koro.
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }
            })

    }

    return (
        <div>
            <h1>This is Manage Services Page</h1>

            {
                services.map(service => <div
                    key={service._id}>
                    <h5>{service.name}</h5>
                    {/* jehetu ekti nirdisto ID ke delete korbe tai arrow function ta use hobe */}
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                </div>
                )
            }
        </div>
    );
};

export default ManageServices;