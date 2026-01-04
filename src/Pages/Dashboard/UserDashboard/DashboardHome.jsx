import React, { useContext, useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { AuthContext } from "../../../Context/AuthContext";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);
    fetch(`http://localhost:3000/my-activities/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setActivities(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [user]);

  if (loading) return <div>Loading dashboard...</div>;

  // Overview stats
  const totalChallenges = activities.length;
  const finishedChallenges = activities.filter(
    (a) => a.status === "Finished"
  ).length;
  const ongoingChallenges = activities.filter(
    (a) => a.status !== "Finished"
  ).length;

  // Pie chart data
  const pieData = [
    { name: "Finished", value: finishedChallenges },
    { name: "Ongoing", value: ongoingChallenges },
  ];
  const COLORS = ["#16a34a", "#facc15"];

  // Bar chart data
  const barData = activities.map((a) => ({
    title: a.challengeTitle,
    progress: a.progress,
  }));

  return (
    <div className="space-y-6  ">
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h2 className="text-gray-500">Total Joined</h2>
          <p className="text-2xl font-bold text-green-600">{totalChallenges}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h2 className="text-gray-500">Finished</h2>
          <p className="text-2xl font-bold text-green-600">
            {finishedChallenges}
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h2 className="text-gray-500">Ongoing</h2>
          <p className="text-2xl font-bold text-green-600">
            {ongoingChallenges}
          </p>
        </div>
      </div>

      
      <div className="bg-white p-6 rounded-xl shadow h-80">
        <h2 className="text-lg font-semibold mb-4">Challenge Status</h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      
      <div className="bg-white p-6 rounded-xl shadow h-80 overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4">Challenge Progress</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={barData}
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
          >
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="progress">
              {barData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.progress >= 50 ? "#16a34a" : "#facc15"} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      
      <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4">My Challenges</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Duration (days)</th>
              <th className="px-4 py-2">Target</th>
              <th className="px-4 py-2">Progress</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((act) => (
              <tr key={act._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{act.challengeTitle}</td>
                <td className="px-4 py-2">{act.category}</td>
                <td className="px-4 py-2">{act.duration}</td>
                <td className="px-4 py-2">{act.target}</td>
                <td className="px-4 py-2">{act.progress}%</td>
                <td className="px-4 py-2">{act.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardHome;
