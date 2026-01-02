import React from "react";
import HeroSlider from "../components/Home/HeroSlider";
import WhyGoGreen from "../components/Home/WhyGoGreen";
import HowItWorks from "../components/Home/HowItWorks";
import LiveStatistics from "../components/Home/LiveStatistics";
import ActiveChallenges from "../components/Home/ActiveChallenges";
import RecentTips from "../components/Home/RecentTips";
import UpcomingEvents from "../components/Home/UpcomingEvents";
import FAQ from "../components/Home/FAQ";
import MotivationalQuotes from "../components/Home/MotivationalQuotes";

const Home = () => {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <LiveStatistics />
      <ActiveChallenges />
      <RecentTips />
      <UpcomingEvents />
      <WhyGoGreen />
      <HowItWorks />
      <MotivationalQuotes />
      <FAQ />
    </div>
  );
};

export default Home;
