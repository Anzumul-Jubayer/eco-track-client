import React, { useState, useEffect } from "react";
import Skeleton from "../components/common/Skeleton";
import { Link } from "react-router";

const categories = [
  "Waste Reduction",
  "Energy Conservation",
  "Water Conservation",
  "Sustainable Transport",
  "Green Living",
];

const Challenges = () => {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: "",
    startDate: "",
    endDate: "",
    participantsMin: "",
    participantsMax: "",
  });

  useEffect(() => {
    fetchChallenges();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const fetchChallenges = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams();
      if (filters.category) query.append("category", filters.category);
      if (filters.startDate) query.append("startDate", filters.startDate);
      if (filters.endDate) query.append("endDate", filters.endDate);
      if (filters.participantsMin) query.append("participantsMin", filters.participantsMin);
      if (filters.participantsMax) query.append("participantsMax", filters.participantsMax);

      const res = await fetch(`https://eco-track-server-pied.vercel.app/challenges?${query.toString()}`);
      const data = await res.json();
      setChallenges(data);
    } catch (err) {
      console.error(err);
      setChallenges([]);
    } finally {
      setLoading(false);
    }
  };

  const skeletonCount = 6;

  return (
    <section className="py-16 bg-linear-to-br from-green-50 to-emerald-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-8 text-center">
          All Challenges
        </h1>

        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="select select-bordered w-52"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <input
            type="date"
            name="startDate"
            value={filters.startDate}
            onChange={handleFilterChange}
            className="input input-bordered w-36"
          />
          <input
            type="date"
            name="endDate"
            value={filters.endDate}
            onChange={handleFilterChange}
            className="input input-bordered w-36"
          />
          <input
            type="number"
            name="participantsMin"
            placeholder="Min Participants"
            value={filters.participantsMin}
            onChange={handleFilterChange}
            className="input input-bordered w-40"
          />
          <input
            type="number"
            name="participantsMax"
            placeholder="Max Participants"
            value={filters.participantsMax}
            onChange={handleFilterChange}
            className="input input-bordered w-40"
          />
          <button
            onClick={fetchChallenges}
            className="btn bg-green-500 hover:bg-green-600 text-white font-semibold"
          >
            Filter
          </button>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {loading
            ? Array.from({ length: skeletonCount }).map((_, idx) => <Skeleton key={idx} />)
            : challenges.length === 0
            ? <p className="col-span-full text-center text-gray-600 font-medium">No challenges found</p>
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
                      <Link  to={`/challenges/${challenge._id}`} className="btn btn-gradient btn-sm w-full bg-green-500 hover:bg-green-600 text-white font-semibold">
                        View Details
                      </Link>
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
