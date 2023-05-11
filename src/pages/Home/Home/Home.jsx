import React from 'react';
import Banner from '../Banner/Banner';
import About from '../../About/About';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <h1 className='text-7xl'>This is home</h1>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;