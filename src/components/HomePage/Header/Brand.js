import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';


const Brand = () => {
    return (
        <div className="row offset-md-2 offset-sm-2 my-5 py-4">
            <div className="col-md-2 col-sm-2 mr-2">
                <img style={{ height: '50px' }} className="img-fluid" src={slack} alt="" />
            </div>
            <div className="col-md-2 col-sm-2 mr-2">
                <img style={{ height: '50px' }} className="img-fluid" src={google} alt="" />
            </div>
            <div className="col-md-2 col-sm-2 mr-2">
                <img style={{ height: '50px' }} className="img-fluid" src={uber} alt="" />
            </div>
            <div className="col-md-2 col-sm-2 mr-2">
                <img style={{ height: '60px' }} className="img-fluid" src={netflix} alt="" />
            </div>
            <div className="col-md-2 col-sm-2">
                <img style={{ height: '50px' }} className="img-fluid" src={airbnb} alt="" />
            </div>
        </div>
    );
};

export default Brand;