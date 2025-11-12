import React, { useEffect, useState, useContext } from "react";
import { useLoaderData } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext";

const JoinChallenge = () => {
  const { user } = useContext(AuthContext);
  const challenge = useLoaderData();
  const [userChallenge, setUserChallenge] = useState(null);

  const userEmail = user?.email;

  // Fetch if user already joined
  const fetchUserChallenge = async () => {
    if (!userEmail) return;
    try {
      const res = await fetch(
        `http://localhost:3000/user-challenges/${userEmail}`
      );
      const data = await res.json();
      const record = data.find(
        (r) => r.challengeId.toString() === challenge._id.toString()
      );
      if (record) {
        setUserChallenge(record);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Join challenge
  const joinChallenge = async () => {
    if (!userEmail) return;
    try {
      const res = await fetch(
        `http://localhost:3000/challenges-join/${challenge._id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: userEmail }),
        }
      );
      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);
        if (data.record) {
          setUserChallenge(data.record);
        } else {
          fetchUserChallenge();
        }
      } else {
        toast.error(data.error || "Failed to join challenge");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error!");
    }
  };

  useEffect(() => {
    if (userEmail) joinChallenge();
  }, [userEmail]);

  return (
    <section className="my-10 py-20 max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-green-800 mb-4">
        {challenge.title}
      </h1>
      <p className="text-gray-600 mb-4">{challenge.description}</p>

      {!userChallenge ? (
        <p>Joining challenge...</p>
      ) : (
        <div className="space-y-3">
          <p>
            <strong>Status:</strong> {userChallenge.status}
          </p>
          <p className="text-green-700 font-semibold">
            ✅ You have successfully joined this challenge!
          </p>
        </div>
      )}
    </section>
  );
};

export default JoinChallenge;
