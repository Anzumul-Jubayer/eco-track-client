import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLeaf, FaRecycle, FaGlobeAmericas, FaHeart } from "react-icons/fa";

const WhyGoGreen = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-linear-to-br from-emerald-50 via-green-50 to-emerald-100 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
       
        <h2
          className="text-3xl md:text-4xl font-extrabold text-green-800 mb-4"
          data-aos="fade-up"
        >
          Why Go Green?
        </h2>
        <p
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Choosing a sustainable lifestyle helps protect the planet, improve
          well-being, and build a better future for everyone.
        </p>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            data-aos="zoom-in"
          >
            <div className="flex justify-center mb-4">
              <FaLeaf className="text-green-600 text-4xl" />
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              Protect Nature
            </h3>
            <p className="text-gray-600 text-sm">
              Reduce waste and conserve natural resources for future generations.
            </p>
          </div>

          
          <div
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="flex justify-center mb-4">
              <FaRecycle className="text-green-600 text-4xl" />
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              Cut Pollution
            </h3>
            <p className="text-gray-600 text-sm">
              Recycling and reusing help lower pollution and carbon footprint.
            </p>
          </div>

        
          <div
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="flex justify-center mb-4">
              <FaGlobeAmericas className="text-green-600 text-4xl" />
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              Build a Better Future
            </h3>
            <p className="text-gray-600 text-sm">
              Sustainable living ensures a healthy planet for coming generations.
            </p>
          </div>

          
          <div
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="flex justify-center mb-4">
              <FaHeart className="text-green-600 text-4xl" />
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              Live Healthier
            </h3>
            <p className="text-gray-600 text-sm">
              Eco-friendly habits improve air, water, and your overall lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGoGreen;
