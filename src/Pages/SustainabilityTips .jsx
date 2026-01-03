import React from "react";
import { FaRecycle, FaBolt, FaTint, FaLeaf } from "react-icons/fa";

const SustainabilityTips = () => {
  const tips = [
    {
      title: "Daily Eco Tips",
      icon: <FaLeaf />,
      items: [
        "Carry a reusable water bottle",
        "Avoid single-use plastics",
        "Choose local and seasonal products",
      ],
    },
    {
      title: "Reduce Waste",
      icon: <FaRecycle />,
      items: [
        "Separate recyclable and organic waste",
        "Reuse containers and bags",
        "Compost food scraps when possible",
      ],
    },
    {
      title: "Energy Saving Habits",
      icon: <FaBolt />,
      items: [
        "Turn off lights when not in use",
        "Use energy-efficient LED bulbs",
        "Unplug devices on standby mode",
      ],
    },
    {
      title: "Water Conservation",
      icon: <FaTint />,
      items: [
        "Turn off tap while brushing",
        "Fix leaking faucets",
        "Use water-efficient appliances",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-emerald-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-green-700">
            Sustainability Tips
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Simple habits can create a big environmental impact. Explore
            practical tips to live more sustainably and reduce your footprint.
          </p>
        </div>

        {/* Tips Cards */}
        <div className="grid sm:grid-cols-2 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-green-100 text-green-600 text-xl">
                  {tip.icon}
                </div>
                <h2 className="text-xl font-semibold text-green-700">
                  {tip.title}
                </h2>
              </div>

              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                {tip.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SustainabilityTips;
