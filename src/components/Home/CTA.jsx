import React from "react";
import { useNavigate } from "react-router";


const CTA = () => {
  const navigate=useNavigate()

  const handleJoin = () => {
    navigate('/register')
  };

  return (
    <section className="w-full py-20 flex items-center justify-center bg-gradient-to-br from-green-200 via-emerald-200 to-green-100">
      <div className="text-center max-w-3xl px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Join EcoTrack & Start Your Green Journey
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-700">
          Take part in challenges, track your progress, and make a real impact on the environment.
        </p>
        <button
          onClick={handleJoin}
          className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg shadow-lg transition duration-300"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CTA;
