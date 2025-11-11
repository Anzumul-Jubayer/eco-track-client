import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Skeleton from "../common/Skeleton";

const ActiveChallenges = () => {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const fetchChallenges = async () => {
      try {
        const res = await fetch("http://localhost:3000/challenges-active");
        const data = await res.json();
        setChallenges(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchChallenges();
  }, []);

  const skeletonCount = challenges.length > 0 ? challenges.length : 6;

  return (
    <section className="py-16 bg-linear-to-br from-green-50 to-emerald-100">
      <div className="max-w-6xl mx-auto px-6">
        <h1
          className="text-3xl md:text-4xl font-extrabold text-green-900 mb-10 text-center"
          data-aos="fade-up"
        >
          Active Challenges
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {loading
            ? Array.from({ length: skeletonCount }).map((_, idx) => (
                <Skeleton key={idx} />
              ))
            : challenges.slice(0, 6).map((challenge, idx) => (
                <div
                  key={idx}
                  data-aos="zoom-in"
                  data-aos-delay={idx * 100}
                  className="card bg-base-100 w-full max-w-sm shadow-md hover:scale-105 transition-transform duration-300"
                >
                  <figure className="px-4 pt-4">
                    <img
                      src={challenge.imageUrl}
                      alt={challenge.title}
                      className="rounded-xl object-cover h-48 w-full"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title text-green-900">{challenge.title}</h2>
                    <p className="text-sm text-gray-600">{challenge.category}</p>
                    <p className="text-sm text-gray-800 mt-2">
                      {challenge.participants} participants | {challenge.impactMetric.value}{" "}
                      {challenge.impactMetric.unit}
                    </p>
                    <div className="card-actions mt-3 w-full">
                      <button className="btn btn-primary w-full">Join Now</button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default ActiveChallenges;
