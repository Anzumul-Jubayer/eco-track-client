import React from 'react';
import HeroSlider from '../components/Home/HeroSlider';
import WhyGoGreen from '../components/Home/WhyGoGreen';
import HowItWorks from '../components/Home/HowItWorks';

const Home = () => {
    return (
        <div>
            <HeroSlider></HeroSlider>
            <WhyGoGreen/>
            <HowItWorks/>
        </div>
    );
};

export default Home;