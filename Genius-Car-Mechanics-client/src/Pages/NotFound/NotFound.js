import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from './../../images/404.png'

const NotFound = () => {
    return (
        <div>
            <img style={{ width: "100%", height: "100vh" }} src={notFoundImage} alt="" />
            <Link to="/"><button>Back to Home</button></Link>
        </div>
    );
};

export default NotFound;