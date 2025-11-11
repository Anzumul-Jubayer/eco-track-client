import React from 'react';
import HeroSlider from '../components/Home/HeroSlider';
import WhyGoGreen from '../components/Home/WhyGoGreen';
import HowItWorks from '../components/Home/HowItWorks';
import LiveStatistics from '../components/Home/LiveStatistics';
import ActiveChallenges from '../components/Home/ActiveChallenges';
import RecentTips from '../components/Home/RecentTips';
import UpcomingEvents from '../components/Home/UpcomingEvents';

const Home = () => {
    return (
        <div>
            <HeroSlider></HeroSlider>
            <LiveStatistics/>
            <ActiveChallenges/>
            <RecentTips/>
            <UpcomingEvents/>
            <WhyGoGreen/>
            <HowItWorks/>
        </div>
    );
};

export default Home;
