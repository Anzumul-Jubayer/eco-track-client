import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState(""); 
  const {
    createUser,
    setUser,
    updateProfileFunc,
    signInGoogle,
    loading,
    SetLoading,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    SetLoading(true);

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/;

    if (!passwordRegex.test(password)) {
      SetLoading(false);
      return; 
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfileFunc(user, name, photo)
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("Registration successful");
            e.target.reset();
            setPassword("");
            navigate("/");
          })
          .catch((error) => toast.error(error.code))
          .finally(() => SetLoading(false));
      })
      .catch((error) => {
        toast.error(error.code);
        SetLoading(false);
      });
  };

  const handleGoogle = () => {
    SetLoading(true);
    signInGoogle()
      .then((res) => {
        const user = res.user;
        setUser(user);
        toast.success("Signed up with Google!");
        navigate("/");
      })
      .catch((error) => toast.error(error.code))
      .finally(() => SetLoading(false));
  };

  
  const checkPassword = {
    length: password.length >= 6,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 via-emerald-100 to-green-200 px-4 py-10">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-xl shadow-lg rounded-2xl p-8 border border-green-100 ">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-green-700">Join EcoTrack</h1>
          <p className="text-gray-500 text-sm mt-2">
            Start your sustainable journey today 🌿
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              className="w-full px-2 py-2 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-2 py-2 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="https://example.com/photo.jpg"
              className="w-full px-2 py-2 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-200"
              required
            />
          </div>

          
          <div className="relative">
            <label className="block text-gray-700 font-semibold mb-1">
              Password
            </label>
            <input
              type={show ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-2 py-2 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-200"
              required
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute top-11 right-8 cursor-pointer"
            >
              {show ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>

            
            <ul className="text-sm mt-2 space-y-1">
              <li
                className={
                  checkPassword.uppercase ? "text-green-600" : "text-red-500"
                }
              >
                At least 1 uppercase letter
              </li>
              <li
                className={
                  checkPassword.lowercase ? "text-green-600" : "text-red-500"
                }
              >
                At least 1 lowercase letter
              </li>
              <li
                className={
                  checkPassword.special ? "text-green-600" : "text-red-500"
                }
              >
                At least 1 special character
              </li>
              <li
                className={
                  checkPassword.length ? "text-green-600" : "text-red-500"
                }
              >
                Minimum 6 characters
              </li>
            </ul>
          </div>

          <button
            type="submit"
            disabled={loading || !Object.values(checkPassword).every(Boolean)}
            className={`btn w-full ${
              loading
                ? "bg-green-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            } text-white font-semibold rounded-xl transition`}
          >
            {loading ? (
              <span className="loading loading-spinner loading-xl"></span>
            ) : (
              "Register"
            )}
          </button>

          <div className="divider text-gray-400 text-sm">OR</div>

          <button
            onClick={handleGoogle}
            type="button"
            disabled={loading}
            className={`btn w-full border border-green-300 ${
              loading
                ? "bg-green-100 cursor-not-allowed"
                : "bg-white hover:bg-green-50"
            } text-gray-700 rounded-xl flex items-center justify-center gap-2`}
          >
            <FcGoogle size={22} />{" "}
            {loading ? (
              <span className="loading loading-spinner loading-xl"></span>
            ) : (
              "Continue with Google"
            )}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-700 font-medium hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
