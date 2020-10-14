import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import work1 from '../../../images/carousel-1.png';
import work2 from '../../../images/carousel-2.png';
import work3 from '../../../images/carousel-3.png';
import work4 from '../../../images/carousel-4.png';
import work5 from '../../../images/carousel-5.png';


const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};


const items = [
    <img style={{ height: '230px' }} src={work1} />,
    <img style={{ height: '230px' }} src={work2} />,
    <img style={{ height: '230px' }} src={work3} />,
    <img style={{ height: '230px' }} src={work4} />,
    <img style={{ height: '230px' }} src={work5} />,
];

const Works = () => {
    return (
        <div className="py-5" style={{ backgroundColor: '#111430' }}>
            <div>
                <h1 className="py-5 text-white text-center font-weight-bold">Here are some of <strong style={{ color: '#7AB259' }}>our works</strong></h1>
            </div>
            <div className="container">
                <AliceCarousel
                    mouseTracking
                    items={items}
                    paddingLeft={40}
                    paddingRight={40}
                    responsive={responsive}
                />
            </div>
        </div>

    );
};

export default Works;