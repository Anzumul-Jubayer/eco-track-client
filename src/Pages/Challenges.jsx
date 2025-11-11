import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import Skeleton from "../components/common/Skeleton";


const Challenges = () => {
  const challengesData = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    if (challengesData) {
      setChallenges(challengesData);
      setLoading(false);
    }
  }, [challengesData]);

  const skeletonCount = challenges.length > 0 ? challenges.length : 6;

  return (
    <section className="py-16 bg-linear-to-br from-green-50 to-emerald-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-12 text-center">
          All Challenges
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {loading
            ? Array.from({ length: skeletonCount }).map((_, idx) => (
                <Skeleton key={idx} />
              ))
            : challenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="card bg-white shadow-lg hover:shadow-2xl rounded-3xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 w-full"
                >
                  <figure className="relative">
                    <img
                      src={challenge.imageUrl}
                      alt={challenge.title}
                      className="w-full h-56 object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-xl text-sm font-semibold">
                      {challenge.category}
                    </span>
                  </figure>
                  <div className="card-body text-center">
                    <h2 className="card-title text-green-900 text-lg md:text-xl mx-auto">
                      {challenge.title}
                    </h2>
                    <p className="text-gray-400 text-sm mt-2 line-clamp-4 text-justify">
                      {challenge.description}
                    </p>
                    <div className="mt-4 flex flex-col gap-2 text-gray-800 text-sm font-medium">
                      <span>
                        <strong className="text-gray-500">Duration:</strong> {challenge.duration} days
                      </span>
                      <span>
                        <strong className="text-gray-500">Participants:</strong> {challenge.participants}
                      </span>
                    </div>
                    <div className="card-actions mt-4">
                      <button className="btn btn-gradient btn-sm w-full bg-green-500 hover:bg-green-600 text-white font-semibold">
                        Join Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
