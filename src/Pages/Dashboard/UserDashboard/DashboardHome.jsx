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
  CartesianGrid,
} from "recharts";
import { AuthContext } from "../../../Context/AuthContext";
import { FaTasks, FaCheckCircle, FaSpinner, FaFireAlt } from "react-icons/fa";

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

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-white">
        <div className="h-12 w-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const totalChallenges = activities.length;
  const finishedChallenges = activities.filter((a) => a.status === "Finished").length;
  const ongoingChallenges = activities.filter((a) => a.status !== "Finished").length;

  const pieData = [
    { name: "Completed", value: finishedChallenges },
    { name: "Ongoing", value: ongoingChallenges },
  ];
  const COLORS = ["#10b981", "#6366f1"];

  const barData = activities.slice(0, 5).map((a) => ({
    name: a.challengeTitle.split(" ")[0],
    progress: a.progress,
  }));

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#FDFDFF]">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full md:w-[350px] h-[300px] md:h-full bg-green-50/50 pointer-events-none z-0 rounded-br-[100px]" />

      <div className="relative z-10 p-5 md:p-8 lg:p-12 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Welcome back, <span className="text-green-600">{user?.displayName?.split(" ")[0]}!</span>
          </h1>
          <p className="text-slate-500 mt-2 font-medium">Track your eco-impact and progress here.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <StatCard title="Total Joined" value={totalChallenges} icon={<FaTasks />} accentColor="bg-blue-500" lightBg="bg-blue-50" />
          <StatCard title="Ongoing" value={ongoingChallenges} icon={<FaSpinner className="animate-spin" />} accentColor="bg-indigo-500" lightBg="bg-indigo-50" />
          <StatCard title="Completed" value={finishedChallenges} icon={<FaCheckCircle />} accentColor="bg-emerald-500" lightBg="bg-emerald-50" />
        </div>

        {/* Charts + Table */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pie Chart */}
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-white h-[400px]">
            <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-emerald-500 rounded-full"></span> Status Distribution
            </h2>
            <ResponsiveContainer width="100%" height="80%">
              <PieChart>
                <Pie data={pieData} innerRadius="65%" outerRadius="85%" paddingAngle={8} dataKey="value" stroke="none">
                  {pieData.map((entry, index) => <Cell key={index} fill={COLORS[index]} cornerRadius={8} />)}
                </Pie>
                <Tooltip />
                <Legend iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-white h-[400px]">
            <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-indigo-500 rounded-full"></span> Progress Overview (%)
            </h2>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" fontSize={11} axisLine={false} tickLine={false} />
                <YAxis fontSize={11} axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: '#f8fafc'}} />
                <Bar dataKey="progress" fill="#6366f1" radius={[8, 8, 8, 8]} barSize={35} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Responsive Table */}
          <div className="bg-white/80 backdrop-blur-md p-4 sm:p-6 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-white overflow-x-auto max-h-[400px]">
            <h2 className="text-lg font-bold text-slate-800 mb-4">My Challenges</h2>
            <table className="min-w-full w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wider">
                  <th className="px-3 py-2">Challenge</th>
                  <th className="px-3 py-2 text-center">Category</th>
                  <th className="px-3 py-2 text-center">Progress</th>
                  <th className="px-3 py-2 text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((act) => (
                  <tr key={act._id} className="hover:bg-green-50/30 transition-colors">
                    <td className="px-3 py-2 font-medium">{act.challengeTitle}</td>
                    <td className="px-3 py-2 text-center">{act.category}</td>
                    <td className="px-3 py-2 text-center">{act.progress}%</td>
                    <td className="px-3 py-2 text-right">
                      <StatusBadge status={act.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// StatCard Component
const StatCard = ({ title, value, icon, accentColor, lightBg }) => (
  <div className="group bg-white p-6 rounded-3xl shadow-lg shadow-slate-200/40 border border-slate-50 flex items-center justify-between transition-all hover:scale-[1.03]">
    <div className="flex items-center gap-5">
      <div className={`w-14 h-14 ${lightBg} flex items-center justify-center text-2xl shadow-inner rounded-2xl`}>
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{title}</p>
        <p className="text-3xl font-black text-slate-800">{value}</p>
      </div>
    </div>
    <div className={`h-12 w-1.5 ${accentColor} rounded-full opacity-20 group-hover:opacity-100 transition-opacity`} />
  </div>
);


const StatusBadge = ({ status }) => {
  const isFinished = status === "Finished";
  return (
    <span className={`inline-flex items-center gap-1 font-bold text-[10px] uppercase px-2 py-1 rounded-md whitespace-nowrap ${isFinished ? "bg-green-100 text-green-700" : "bg-indigo-100 text-indigo-700"}`}>
      {status}
    </span>
  );
};

export default DashboardHome;
