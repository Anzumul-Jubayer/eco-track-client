import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../Firebase/firebase.config";
import toast from "react-hot-toast";
import {
  FaCamera,
  FaUser,
  FaEnvelope,
  FaEdit,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [editable, setEditable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    photo: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.displayName || "",
        photo: user.photoURL || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `https://eco-track-server-pied.vercel.app/users-update/${encodeURIComponent(
          user.email
        )}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        if (auth.currentUser) {
          await updateProfile(auth.currentUser, {
            displayName: formData.name,
            photoURL: formData.photo,
          });
        }

        setUser({
          ...user,
          displayName: formData.name,
          photoURL: formData.photo,
        });

        toast.success("Profile updated successfully!");
        setEditable(false);
      } else {
        toast.error(data?.error || "Update failed");
      }
    } catch (err) {
      console.error("Update Error:", err);
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-gray-50/50 pb-10">
      {/* Top Banner Decor */}
      <div className="h-48 w-full bg-gradient-to-r from-green-600 to-emerald-500 shadow-inner"></div>

      <div className="max-w-6xl mx-auto px-4 -mt-24">
        <form onSubmit={handleSave} className="space-y-6">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            {/* Header / Profile Info */}
            <div className="p-8 md:p-12 flex flex-col md:flex-row items-center md:items-end gap-8">
              <div className="relative group">
                <img
                  src={
                    user?.photoURL ||
                    formData.photo ||
                    "https://via.placeholder.com/150"
                  }
                  alt="Profile"
                  className="w-40 h-40 rounded-3xl object-cover border-8 border-white shadow-2xl transition-transform duration-300 group-hover:scale-105"
                />
                {editable && (
                  <div className="absolute inset-0 bg-black/40 rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <FaCamera className="text-white text-3xl" />
                  </div>
                )}
              </div>

              <div className="flex-1 text-center md:text-left pb-2">
                <h1 className="text-4xl font-black text-gray-800 tracking-tight">
                  {user?.displayName || "Full Name"}
                </h1>
                <p className="text-lg text-gray-500 font-medium flex items-center justify-center md:justify-start gap-2 mt-1">
                  <FaEnvelope className="text-green-500" /> {user?.email}
                </p>
              </div>

              <div className="pb-2">
                {!editable ? (
                  <button
                    type="button"
                    onClick={() => setEditable(true)}
                    className="flex items-center gap-2 px-8 py-3 bg-green-600 text-white font-bold rounded-2xl shadow-lg shadow-green-200 hover:bg-green-700 hover:-translate-y-1 transition-all active:scale-95"
                  >
                    <FaEdit /> Edit Profile
                  </button>
                ) : (
                  <div className="flex gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex items-center gap-2 px-8 py-3 bg-green-600 text-white font-bold rounded-2xl shadow-lg hover:bg-green-700 transition-all disabled:opacity-50"
                    >
                      <FaCheck /> {loading ? "Saving..." : "Save"}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setEditable(false);
                        setFormData({
                          name: user.displayName,
                          photo: user.photoURL,
                        });
                      }}
                      className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-600 font-bold rounded-2xl hover:bg-gray-200 transition-all"
                    >
                      <FaTimes /> Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Details Section */}
            <div className="p-8 md:p-12 bg-gray-50/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Name Input */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest">
                    <FaUser className="text-green-500" /> Display Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    disabled={!editable}
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 rounded-2xl border-2 transition-all outline-none font-semibold text-lg ${
                      editable
                        ? "bg-white border-green-200 focus:border-green-500 shadow-sm"
                        : "bg-gray-100 border-transparent text-gray-500 cursor-not-allowed"
                    }`}
                  />
                </div>

                {/* Email (Read Only) */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest">
                    <FaEnvelope className="text-green-500" /> Email Address
                  </label>
                  <input
                    type="text"
                    disabled
                    value={user?.email || ""}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-transparent bg-gray-100 text-gray-400 font-semibold text-lg cursor-not-allowed"
                  />
                </div>

                {/* Photo URL Input */}
                {editable && (
                  <div className="md:col-span-2 space-y-3 animate-in slide-in-from-top-4 duration-300">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest">
                      <FaCamera className="text-green-500" /> Profile Image URL
                    </label>
                    <input
                      type="text"
                      name="photo"
                      value={formData.photo}
                      onChange={handleChange}
                      placeholder="Paste image link here..."
                      className="w-full px-6 py-4 rounded-2xl border-2 border-green-200 focus:border-green-500 bg-white shadow-sm outline-none font-medium"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Extra Info Card (Optional Design Element) */}
          <div className="bg-gradient-to-br from-white to-green-50 p-8 rounded-3xl border border-green-100 flex items-center justify-between shadow-sm">
            <div>
              <h4 className="font-bold text-green-900 text-lg">
                Account Status
              </h4>
              <p className="text-green-600 font-medium">
                Your profile is 100% complete and verified.
              </p>
            </div>
            <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-green-200">
              ✓
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Profile;
