import React from 'react';
import Header from '../Shared/Header/Header';
import About from './About/About';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>            
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;