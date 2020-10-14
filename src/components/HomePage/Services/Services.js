import React from 'react';
import services1 from '../../../images/icons/service1.png';
import services2 from '../../../images/icons/service2.png';
import services3 from '../../../images/icons/service3.png';
import ServicesCard from './ServicesCard';

const serviceData = [
    {
        title: 'Web & Mobile design',
        description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
        img: services1
    },
    {
        title: 'Graphic design',
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
        img: services2
    },
    {
        title: 'Web development',
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
        img: services3
    }
]

const Services = () => {
    return (
        <>
            <div className="py-5">
                <h1 className="pt-3 text-center font-weight-bold">Provide a awesome <strong style={{color: '#7AB259'}}>services</strong></h1>
            </div>
            <div className="container">
                <div className="row">
                    {
                        serviceData.map(service => <ServicesCard service={service}></ServicesCard>)
                    }
                </div>
            </div>

        </>
    );
};

export default Services;