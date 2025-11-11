import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Skeleton from "../common/Skeleton";


const RecentTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const fetchTips = async () => {
      try {
        const res = await fetch("http://localhost:3000/recent-tips");
        const data = await res.json();
        setTips(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTips();
  }, []);

  const skeletonCount = tips.length > 0 ? tips.length : 5;

  return (
    <section className="py-16 bg-linear-to-br from-green-50 to-emerald-100">
      <div className="max-w-6xl mx-auto px-6">
        <h1
          className="text-3xl md:text-4xl font-extrabold text-green-900 mb-10 text-center"
          data-aos="fade-up"
        >
          Recent Tips
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: skeletonCount }).map((_, idx) => (
                <Skeleton key={idx} />
              ))
            : tips.map((tip, idx) => (
                <div
                  key={idx}
                  data-aos="zoom-in"
                  data-aos-delay={idx * 100}
                  className="card bg-base-100 shadow-md hover:scale-105 transition-transform duration-300"
                >
                  <div className="card-body">
                    <h2 className="card-title text-green-900">{tip.title}</h2>
                    <p className="text-sm text-gray-700 mt-2 line-clamp-3">
                      {tip.content}
                    </p>
                    <div className="mt-3 flex justify-between items-center text-sm text-gray-600">
                      <span>By {tip.authorName}</span>
                      <span>{tip.upvotes} upvotes</span>
                    </div>
                    <div className="mt-1 text-xs text-gray-400">
                      {new Date(tip.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default RecentTips;
