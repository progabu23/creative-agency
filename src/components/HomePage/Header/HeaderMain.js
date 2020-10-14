import React from 'react';
import frame from '../../../images/logos/Frame.png'

const HeaderMain = () => {
    return (
        <main style={{ height: '700px' }} className="row d-flex align-items-center">
            <div className="col-md-4 col-12 offset-md-1 offset-sm-1">
                <h1 style={{ color: '#3A4256' }} className="font-weight-bold">Let’s Grow Your <br /> Brand To The <br /> Next Level</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button className="btn btn-dark px-5">Hire Us</button>
            </div>
            <div className="col-md-6 col-12">
                <img style={{ height: '480px', }} className="img-fluid" src={frame} alt="" />
            </div>
        </main>
    );
};

export default HeaderMain;