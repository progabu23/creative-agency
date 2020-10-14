import React from 'react';
import ClientReview from '../ClientReview/ClientReview';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div style={{overflowX: 'hidden'}}>
            <Header></Header>
            <Services></Services>
            <Works></Works>
            <ClientReview></ClientReview>
            <Contact></Contact>
        </div>
    );
};

export default Home;