import React from 'react';

const ClientReviewCard = ({ review }) => {
    return (
        <div className="card col-md-3 mr-4" style={{padding: '0'}}>
            <div className="card-footer d-flex  align-items-center">
                <img className="mr-2" src={review.img} alt="" style={{height: '60px'}} />
                <div>
                    <h6 style={{ color: '#1cc7c1' }}>{review.name}</h6>
                    <p className="m-0">{review.job}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-center">{review.info}</p>
            </div>
        </div>
    );
};

export default ClientReviewCard;