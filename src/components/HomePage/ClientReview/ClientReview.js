import React from 'react';
import nash from '../../../images/customer-1.png';
import miriam from '../../../images/customer-2.png';
import bria from '../../../images/customer-3.png';
import ClientReviewCard from './ClientReviewCard';

const ClientReviews = [
    {
        name: 'Nash Patrik',
        job: 'CEO, Manpol',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat ',
        img: nash
    },
    {

        name: 'Miriam Barron',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat ',
        job: 'CEO, Manpol',
        img: miriam
    },
    {

        name: 'Bria Malone',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat ',
        job: 'CEO, Manpol',
        img: bria
    }
]

const ClientReview = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div>
                    <h1 className="pt-3 text-center font-weight-bold">Clients <strong style={{ color: '#7AB259' }}>FeedBack</strong></h1>
                </div>
                <div className="mt-5 row justify-content-center">
                    {
                        ClientReviews.map(review => <ClientReviewCard review={review} key={review.name} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default ClientReview;