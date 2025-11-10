import React from 'react';
import HeroSlider from '../components/Home/HeroSlider';
import WhyGoGreen from '../components/Home/WhyGoGreen';
import HowItWorks from '../components/Home/HowItWorks';
import LiveStatistics from '../components/Home/LiveStatistics';

const Home = () => {
    return (
        <div>
            <HeroSlider></HeroSlider>
            <LiveStatistics/>
            <WhyGoGreen/>
            <HowItWorks/>
        </div>
    );
};

export default Home;