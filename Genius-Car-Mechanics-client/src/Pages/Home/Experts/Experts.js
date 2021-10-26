import React from 'react';
import Expert from '../Expert/Expert.js';
import './Experts.css';

import mechanic1 from './../../../images/mechanic/mechanic-1.jpg';
import mechanic2 from './../../../images/mechanic/mechanic-2.jpg';
import mechanic3 from './../../../images/mechanic/mechanic-3.jpg';
import mechanic4 from './../../../images/mechanic/mechanic-4.jpg';
import mechanic5 from './../../../images/mechanic/mechanic-5.jpg';

const experts = [
    {
        "id": 1,
        img: mechanic1,
        name: 'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        "id": 2,
        img: mechanic2,
        name: 'John Anderson',
        expertize: '-Polish Expert-'
    },
    {
        "id": 3,
        img: mechanic3,
        name: 'Zakaria Smith',
        expertize: '-Coloring Expert-'
    },
    {
        "id": 4,
        img: mechanic4,
        name: 'Sakib Anderson',
        expertize: '-Alrounder Expert-'
    },
    {
        "id": 5,
        img: mechanic5,
        name: 'Nathan Griffin',
        expertize: '-Engine Expert-'
    },
]


const Experts = () => {
    return (
        <div id="experts" className="container">
            <h1 className="text-primary mt-5">Our Experts</h1>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;