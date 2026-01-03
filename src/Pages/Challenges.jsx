import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import Skeleton from "../components/common/Skeleton";

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
    search: "",
    sort: "",
  });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(filters.search);
      setPage(1); // reset page on search
    }, 500);

    return () => clearTimeout(handler);
  }, [filters.search]);

  useEffect(() => {
    fetchChallenges();
  }, [filters.category, filters.startDate, filters.endDate, filters.sort, debouncedSearch, page]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
    setPage(1); // reset page when filter changes
  };

  const fetchChallenges = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filters.category) params.append("category", filters.category);
      if (filters.startDate) params.append("startDate", filters.startDate);
      if (filters.endDate) params.append("endDate", filters.endDate);
      if (debouncedSearch) params.append("search", debouncedSearch.trim());
      if (filters.sort) params.append("sort", filters.sort);
      params.append("page", page);

      const res = await fetch(`http://localhost:3000/challenges?${params.toString()}`);
      const data = await res.json();

      setChallenges(data.data);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error(err);
      setChallenges([]);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-linear-to-br from-green-50 via-green-100 to-emerald-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-12 text-center">
          All Challenges
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-12 items-center bg-white/50 p-6 rounded-3xl backdrop-blur-sm shadow-sm">
          <select name="category" value={filters.category} onChange={handleFilterChange} className="select select-bordered w-full md:w-52">
            <option value="">All Categories</option>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>

          <div className="flex flex-col md:flex-row lg:flex-row items-center gap-2">
            <input type="date" name="startDate" value={filters.startDate} onChange={handleFilterChange} className="input input-bordered w-36" />
            <span className="text-gray-500">to</span>
            <input type="date" name="endDate" value={filters.endDate} onChange={handleFilterChange} className="input input-bordered w-36" />
          </div>

          <div className="relative w-full md:w-64">
            <input type="text" name="search" value={filters.search} onChange={handleFilterChange} placeholder="Search by title..." className="input input-bordered w-full pr-10" />
            {loading && <span className="loading loading-spinner loading-xs absolute right-3 top-4"></span>}
          </div>

          <select name="sort" value={filters.sort} onChange={handleFilterChange} className="select select-bordered w-full md:w-52">
            <option value="">Sort By Participants</option>
            <option value="participantsDesc">Most → Least</option>
            <option value="participantsAsc">Least → Most</option>
          </select>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {loading && !challenges.length
            ? Array.from({ length: 8 }).map((_, idx) => <Skeleton key={idx} />)
            : challenges.length === 0
            ? <div className="col-span-full text-center py-20">
                <p className="text-gray-600 text-xl font-medium">No challenges found matching your filters.</p>
                <button onClick={() => { setFilters({category:"", startDate:"", endDate:"", search:"", sort:""}); setPage(1); }} className="btn btn-ghost text-green-600 mt-2">Clear All Filters</button>
              </div>
            : challenges.map(challenge => (
                <div key={challenge._id} className="card bg-white shadow-lg hover:shadow-2xl rounded-3xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
                  <figure className="relative h-52">
                    <img src={challenge.imageUrl} alt={challenge.title} className="w-full h-full object-cover"/>
                    <div className="absolute top-3 left-3 bg-green-600/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{challenge.category}</div>
                  </figure>

                  <div className="card-body p-6">
                    <h2 className="card-title text-green-900 text-lg font-bold line-clamp-1">{challenge.title}</h2>
                    <p className="text-gray-500 text-sm mt-2 line-clamp-3 leading-relaxed">{challenge.description}</p>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center text-sm">
                      <div className="flex flex-col">
                        <span className="text-gray-400 text-xs">Duration</span>
                        <span className="font-semibold text-gray-700">{challenge.duration} Days</span>
                      </div>
                      <div className="flex flex-col text-right">
                        <span className="text-gray-400 text-xs">Participants</span>
                        <span className="font-semibold text-gray-700">{challenge.participants}</span>
                      </div>
                    </div>

                    <div className="card-actions mt-6">
                      <Link to={`/challenges/${challenge._id}`} className="btn btn-primary w-full bg-green-600 border-none hover:bg-green-700 text-white rounded-xl shadow-md">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-3 mt-12">
            <button onClick={() => setPage(prev => Math.max(prev-1,1))} className="btn btn-sm btn-outline">Prev</button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i} onClick={() => setPage(i+1)} className={`btn btn-sm ${page===i+1 ? "btn-active bg-green-600 border-none text-white" : "btn-outline"}`}>{i+1}</button>
            ))}
            <button onClick={() => setPage(prev => Math.min(prev+1,totalPages))} className="btn btn-sm btn-outline">Next</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Challenges;
