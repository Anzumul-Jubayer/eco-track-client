import React, { useEffect, useState, useContext } from "react";
import { useLoaderData } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext";

const JoinChallenge = () => {
  const { user } = useContext(AuthContext); 
  const challenge = useLoaderData();
  const [userChallenge, setUserChallenge] = useState(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Not Started");

  const userEmail = user?.email;

  
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
        setProgress(record.progress);
        setStatus(record.status);
      }
    } catch (err) {
      console.error(err);
    }
  };

  
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
          setProgress(data.record.progress);
          setStatus(data.record.status);
        } else {
         
          fetchUserChallenge();
        }
      } else {
        toast.error(data.error || "Failed to join");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error!");
    }
  };

  
  const updateProgress = async () => {
    if (!userChallenge) return;

    const newProgress = Math.min(progress + 10, 100);
    const newStatus =
      newProgress === 100
        ? "Finished"
        : newProgress > 0
        ? "Ongoing"
        : "Not Started";

    try {
      const res = await fetch(
        `http://localhost:3000/user-challenges/${userChallenge._id}/progress`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ progress: newProgress, status: newStatus }),
        }
      );
      const data = await res.json();

      if (res.ok) {
        toast.success("Progress updated!");
        setProgress(newProgress);
        setStatus(newStatus);
        setUserChallenge((prev) => ({
          ...prev,
          progress: newProgress,
          status: newStatus,
        }));
      } else {
        toast.error(data.error || "Failed to update progress");
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
      <h1 className="text-3xl font-bold text-green-800 mb-4">{challenge.title}</h1>
      <p className="text-gray-600 mb-4">{challenge.description}</p>

      {!userChallenge ? (
        <p>Joining challenge...</p>
      ) : (
        <div className="space-y-4">
          <div className="w-full bg-gray-200 rounded-full h-6">
            <div
              className="bg-green-500 h-6 rounded-full text-white text-center font-semibold"
              style={{ width: `${progress}%` }}
            >
              {progress}%
            </div>
          </div>
          <p>Status: <strong>{status}</strong></p>
          <button
            className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={updateProgress}
            disabled={progress >= 100}
          >
            {progress >= 100 ? "Completed" : "Update Progress +10%"}
          </button>
        </div>
      )}
    </section>
  );
};

export default JoinChallenge;
