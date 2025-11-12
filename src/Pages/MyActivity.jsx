import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";

const MyActivities = () => {
  const { user } = useContext(AuthContext);
  const [userChallenges, setUserChallenges] = useState([]);
  const userEmail = user?.email;
  const navigate = useNavigate();

  const fetchUserChallenges = async () => {
    if (!userEmail) return;
    try {
      const res = await fetch(
        `https://eco-track-server-pied.vercel.app/my-activities/${userEmail}`
      );
      const data = await res.json();
      setUserChallenges(data);
      console.log("Fetched user challenges:", data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUserChallenges();
  }, [userEmail]);

  const handleUpdateProgress = (id) => {
    navigate(`/my-activities/${id}`);
  };

  return (
    <section className="max-w-5xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold text-green-800 mb-8">My Activities</h1>

      {userChallenges.length === 0 ? (
        <p className="text-gray-600">You haven't joined any challenges yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {userChallenges.map((uc) => (
            <div
              key={uc._id}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                {uc.challengeTitle || "Unnamed Challenge"}
              </h2>
              <p className="mb-2">
                Status: <strong>{uc.status}</strong>
              </p>

              <button
                onClick={() => handleUpdateProgress(uc._id)}
                className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
              >
                Update Progress
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MyActivities;
