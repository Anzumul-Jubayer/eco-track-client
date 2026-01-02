import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-4xl text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
          About EcoTrack
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-green-800 mb-6 leading-relaxed">
          EcoTrack is a community-driven platform dedicated to promoting sustainable living. 
          Here, eco-conscious individuals can join challenges, share tips, participate in green events, 
          and track their personal environmental impact — all while contributing to a collective global effort.
        </p>

        <p className="text-lg md:text-xl text-green-800 mb-6 leading-relaxed">
          Our mission is to empower everyone to take small, measurable steps towards a greener, healthier planet. 
          By connecting communities, we make sustainability easy, engaging, and rewarding.
        </p>

        {/* CTA / Optional */}
        <p className="text-green-700 font-semibold">
          Join us today and make a real impact!
        </p>
      </div>
    </section>
  );
};

export default About;
