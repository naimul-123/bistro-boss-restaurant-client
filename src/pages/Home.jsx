import React from 'react';
import Banner from '../components/Banner';
import Category from '../components/Category';
import PopulerMenu from '../components/PopulerMenu';
import Featured from '../components/Featured';
import Testimonials from '../components/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner />
            <Category />
            <PopulerMenu />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;