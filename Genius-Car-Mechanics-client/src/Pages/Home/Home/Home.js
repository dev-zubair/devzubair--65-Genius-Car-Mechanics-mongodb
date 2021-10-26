import React from 'react';
import Experts from '../Experts/Experts.js';
import Slider from '../Slider/Slider.js';
import Services from './../Services/Services.js';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Experts></Experts>

        </div>
    );
};

export default Home;