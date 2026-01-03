import React from "react";
import { FaLeaf, FaBullseye, FaHandsHelping, FaGlobe } from "react-icons/fa";

const OurMission = () => {
  const cards = [
    {
      title: "Why EcoTrack",
      icon: <FaLeaf />,
      text: "Climate change, pollution, and excessive waste are global challenges that require everyday action. EcoTrack bridges the gap between awareness and real-world impact by transforming sustainability into simple, achievable daily challenges.",
    },
    {
      title: "Environmental Impact Goals",
      icon: <FaBullseye />,
      text: "Our mission focuses on reducing carbon footprints, encouraging recycling, saving energy, and promoting responsible consumption through measurable and trackable user activities.",
    },
    {
      title: "How Users Contribute",
      icon: <FaHandsHelping />,
      text: "Users participate in eco challenges, log sustainable actions, track progress over time, and inspire others through visible impact. Small consistent efforts lead to meaningful environmental change.",
    },
    {
      title: "Our Vision",
      icon: <FaGlobe />,
      text: "We envision a future where technology empowers communities to make informed, sustainable choices and protects the planet for future generations through collective responsibility.",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-emerald-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-16">
        
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-green-700">
            Our Mission
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            EcoTrack is a sustainability-driven platform that empowers
            individuals to build eco-friendly habits, track positive actions,
            and contribute to a greener and healthier planet.
          </p>
        </div>

        
        <div className="grid sm:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-green-100 text-green-600 text-xl">
                  {card.icon}
                </div>
                <h2 className="text-xl font-semibold text-green-700">
                  {card.title}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default OurMission;
