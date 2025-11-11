import React, { useEffect, useState } from "react";
import Skeleton from "../common/Skeleton";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("http://localhost:3000/events-upcoming");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const skeletonCount = 4;

  return (
    <section className="py-16 bg-linear-to-br from-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-10 text-center">
          Upcoming Events
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {loading
            ? Array.from({ length: skeletonCount }).map((_, idx) => (
                <div key={idx} className="w-full max-w-sm mx-auto">
                  <Skeleton />
                </div>
              ))
            : events.map((event, idx) => (
                <div
                  key={idx}
                  className="card bg-base-100 w-full max-w-sm mx-auto shadow-md hover:scale-105 transition-transform duration-300"
                >
                 
                  <div className="card-body text-center items-center">
                    <h2 className="card-title text-green-900 text-center">
                      {event.title}
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                      {event.location}
                    </p>
                    <p className="text-sm text-gray-800 mt-2">
                      {new Date(event.date).toLocaleDateString()} |{" "}
                      {event.currentParticipants}/{event.maxParticipants}{" "}
                      participants
                    </p>
                    <p className="text-gray-700 mt-2 line-clamp-3">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
