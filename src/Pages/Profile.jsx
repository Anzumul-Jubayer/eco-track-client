import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
        
       
        <div className="flex-shrink-0">
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-green-500"
          />
        </div>

        
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-green-800">{user?.displayName || "Your Name"}</h1>
              <p className="text-gray-600">{user?.email}</p>
            </div>
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Edit Profile
            </button>
          </div>

         
         

          
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-green-50 text-green-700 rounded-lg p-4 text-center">
              <p className="text-lg font-bold">{user?.joinedChallenges || 0}</p>
              <p className="text-sm">Joined</p>
            </div>
            <div className="bg-green-50 text-green-700 rounded-lg p-4 text-center">
              <p className="text-lg font-bold">{user?.completedChallenges || 0}</p>
              <p className="text-sm">Completed</p>
            </div>
            <div className="bg-green-50 text-green-700 rounded-lg p-4 text-center">
              <p className="text-lg font-bold">{user?.ongoingChallenges || 0}</p>
              <p className="text-sm">Ongoing</p>
            </div>
            <div className="bg-green-50 text-green-700 rounded-lg p-4 text-center">
              <p className="text-lg font-bold">{user?.impact || 0}</p>
              <p className="text-sm">Impact Points</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
