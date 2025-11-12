import React from "react";
import { Link, useLoaderData } from "react-router";

const ChallengeDetails = () => {
  const challenge = useLoaderData();
  const {
    _id, title, description, category, duration, participants, imageUrl, impactMetric, startDate, endDate
  } = challenge || {};

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl p-10 flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="flex-1 space-y-5">
          <h1 className="text-4xl font-extrabold text-green-900">{title}</h1>
          <p className="text-gray-600">{description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800 text-sm">
            <p><strong className="text-gray-500">Category:</strong> {category}</p>
            <p><strong className="text-gray-500">Duration:</strong> {duration} days</p>
            <p><strong className="text-gray-500">Participants:</strong> {participants}</p>
            {impactMetric && <p><strong className="text-gray-500">Impact:</strong> {impactMetric.value} {impactMetric.unit}</p>}
            <p><strong className="text-gray-500">Start Date:</strong> {startDate}</p>
            <p><strong className="text-gray-500">End Date:</strong> {endDate}</p>
          </div>

          <Link
            to={`/challenges-join/${_id}`}
            className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-md"
          >
            Join This Challenge
          </Link>
        </div>

        <div className="flex-1 flex justify-center">
          <img src={imageUrl} alt={title} className="w-full max-w-md h-80 object-cover rounded-2xl shadow-lg border border-green-100" />
        </div>
      </div>
    </section>
  );
};

export default ChallengeDetails;
