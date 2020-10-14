import React from 'react';
import { useHistory } from 'react-router';
import './Services.css'


const ServicesCard = ({ service }) => {   
    const history = useHistory()
    const handleService = () => {
        history.push("/dashboard")
    }
    return (
        <div className="col-md-4 col-sm-6 col-12 my-5 pb-5 box" onClick={() => handleService()}>
            <div className="text-center">
                <div className="pb-2 pt-2">
                   <img style={{ height: '80px'}} src={service.img} alt=""/>
                </div>
                <div className="">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;