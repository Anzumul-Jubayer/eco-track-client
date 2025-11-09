import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPlusCircle, FaChartLine, FaShareAlt } from "react-icons/fa";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const steps = [
    {
      icon: <FaPlusCircle className="text-green-600 text-4xl" />,
      title: "Join a Challenge",
      desc: "Pick a sustainability challenge that suits your lifestyle and start your journey.",
      aos: "fade-right",
    },
    {
      icon: <FaChartLine className="text-green-600 text-4xl" />,
      title: "Track Progress",
      desc: "Monitor your activities and see your positive impact grow over time.",
      aos: "fade-up",
    },
    {
      icon: <FaShareAlt className="text-green-600 text-4xl" />,
      title: "Share Tips",
      desc: "Contribute to the community by sharing helpful eco-tips and experiences.",
      aos: "fade-left",
    },
  ];

  return (
    <section className="bg-emerald-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2
          className="text-3xl md:text-4xl font-extrabold text-green-800 mb-6"
          data-aos="fade-up"
        >
          How It Works
        </h2>
        <p
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Follow these 3 simple steps to start making a positive impact on the
          environment.
        </p>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
              data-aos={step.aos}
              data-aos-delay={index * 200}
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
