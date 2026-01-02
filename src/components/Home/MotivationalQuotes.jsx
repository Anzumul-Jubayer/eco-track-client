import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";

// Example eco quotes array
const ecoQuotes = [
  "Every small step counts towards a greener planet.",
  "Reduce, Reuse, Recycle – Your planet needs you!",
  "Plant trees, save bees, and clean the seas.",
  "Sustainability starts with your daily choices.",
  "Green living is not a trend, it's a responsibility.",
  "Small acts multiplied by millions can change the world.",
  "Be the change you want to see in nature.",
  "Conserve water, conserve life.",
  "Think globally, act locally.",
  "Your actions today create the world of tomorrow."
];

const MotivationalQuotes = () => {
  const [quote, setQuote] = useState(ecoQuotes[0]);

  const handleNewQuote = () => {
    let randomIndex = Math.floor(Math.random() * ecoQuotes.length);
    setQuote(ecoQuotes[randomIndex]);
  };

  return (
    <section className="py-16 px-4 text-center bg-linear-to-br from-green-200 via-emerald-200 to-green-100">
      <h2 className="text-3xl font-bold text-black  mb-6 flex items-center justify-center gap-2">
        <FaLeaf /> Eco Motivation
      </h2>
      <p className="text-lg md:text-xl text-black  mb-6 max-w-xl mx-auto">
        "{quote}"
      </p>
      <button
        onClick={handleNewQuote}
        className="bg-white text-black hover:bg-green-100 font-semibold py-2 px-6 rounded-lg transition duration-300"
      >
        Inspire Me
      </button>
    </section>
  );
};

export default MotivationalQuotes;
