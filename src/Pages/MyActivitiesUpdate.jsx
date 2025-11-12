import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import toast from "react-hot-toast";

const MyActivitiesUpdate = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchActivity = async () => {
    try {
      const res = await fetch(
        `https://eco-track-server-pied.vercel.app/user-challenges/item/${id}`
      );
      const data = await res.json();
      setActivity(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActivity();
  }, [id]);

  const handleProgressUpdate = async () => {
    if (!activity) return;

    let newProgress = Math.min(activity.progress + 10, 100);
    let newStatus = newProgress === 100 ? "Finished" : "Ongoing";

    try {
      const res = await fetch(
        `https://eco-track-server-pied.vercel.app/user-challenges/update/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ progress: newProgress, status: newStatus }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success("✅ Progress updated!");
        setActivity(data);
      } else {
        toast.error(data.error || "Failed to update progress!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error!");
    }
  };

  if (loading) return <p className="text-center py-20">Loading...</p>;
  if (!activity)
    return <p className="text-center py-20">Activity not found.</p>;

  return (
    <section className="max-w-xl mx-auto py-20 px-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold text-green-800 mb-4">
        {activity.challengeTitle || "Unnamed Challenge"}
      </h1>
      <p className="mb-2 text-gray-700">
        <strong>Status:</strong> {activity.status}
      </p>

      <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: `${activity.progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 mb-2">
        {activity.progress}% completed
      </p>

      <p className="text-xs text-gray-500 mb-6">
        Last updated: {new Date(activity.lastUpdated).toLocaleString()}
      </p>

      <button
        onClick={handleProgressUpdate}
        disabled={activity.progress >= 100}
        className={`w-full py-2 rounded-lg transition ${
          activity.progress >= 100
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700 text-white"
        }`}
      >
        {activity.progress >= 100
          ? "Challenge Completed"
          : "Update Progress +10%"}
      </button>
    </section>
  );
};

export default MyActivitiesUpdate;
