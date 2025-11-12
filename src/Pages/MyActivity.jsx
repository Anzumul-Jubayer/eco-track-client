import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router";

const MyActivity = () => {
  const { user } = useContext(AuthContext);
  const [userChallenges, setUserChallenges] = useState([]);
  const userEmail = user?.email;

  const fetchUserChallenges = async () => {
    if (!userEmail) return;
    try {
      const res = await fetch(`http://localhost:3000/my-activities/${userEmail}`);
      const data = await res.json();
      setUserChallenges(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUserChallenges();
  }, [userEmail]);

  return (
    <section className="max-w-5xl mx-auto py-20">
      <h1 className="text-3xl font-bold text-green-800 mb-8">My Activities</h1>
      {userChallenges.length === 0 ? (
        <p>You haven't joined any challenges yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {userChallenges.map((uc) => (
            <Link
              key={uc._id}
              to={`/my-activities/${uc._id}`}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-green-700">
                {uc.challengeTitle || uc.challengeId} {/* backend এ challenge title include করলে ভালো হয় */}
              </h2>
              <p>Status: <strong>{uc.status}</strong></p>
              <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                <div
                  className="bg-green-500 h-4 rounded-full"
                  style={{ width: `${uc.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">{uc.progress}% completed</p>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default MyActivity;
