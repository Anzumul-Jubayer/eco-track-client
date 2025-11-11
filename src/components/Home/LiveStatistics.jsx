import React, { useEffect, useState } from "react";
import { FaLeaf, FaRecycle, FaTree, FaBolt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const LiveStatistics = () => {
  const [statsData, setStatsData] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const fetchStats = async () => {
      try {
        const res = await fetch("http://localhost:3000/statistics");
        const data = await res.json();
        setStatsData(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchStats();
  }, []);

  if (!statsData) return <div>Loading...</div>;

  
  const stats = [
    {
      id: 1,
      icon: <FaLeaf className="text-green-600 text-3xl" />,
      title: "Total CO₂ Saved",
      value: statsData.impactTotals["kg CO₂ saved"] || 0 + " kg",
      color: "from-green-100 to-green-50",
      delay: "0",
    },
    {
      id: 2,
      icon: <FaRecycle className="text-emerald-600 text-3xl" />,
      title: "Plastic Reduced",
      value: statsData.impactTotals["kg plastic saved"] || 0 + " kg",
      color: "from-emerald-100 to-emerald-50",
      delay: "200",
    },
    {
      id: 3,
      icon: <FaTree className="text-lime-600 text-3xl" />,
      title: "Trees Planted",
      value: statsData.impactTotals["trees planted"] || 0,
      color: "from-lime-100 to-lime-50",
      delay: "400",
    },
    {
      id: 4,
      icon: <FaBolt className="text-yellow-600 text-3xl" />,
      title: "Energy Saved",
      value: statsData.impactTotals["kWh saved"] || 0 + " kWh",
      color: "from-yellow-100 to-yellow-50",
      delay: "600",
    },
  ];

  return (
    <section className="py-16 bg-linear-to-br from-green-50 to-emerald-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1
          className="text-3xl md:text-4xl font-extrabold text-green-900 mb-10"
          data-aos="fade-up"
        >
          Live Community Statistics
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              data-aos="zoom-in"
              data-aos-delay={stat.delay}
              className={`p-6 rounded-2xl shadow-md bg-linear-to-br ${stat.color} hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex flex-col items-center">
                {stat.icon}
                <h3 className="text-xl font-semibold text-gray-800 mt-3">
                  {stat.title}
                </h3>
                <p className="text-2xl font-bold text-green-700 mt-2">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveStatistics;
