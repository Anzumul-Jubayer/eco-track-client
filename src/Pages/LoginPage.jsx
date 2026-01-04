import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, signInGoogle, setUser, loading, SetLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();

  //  Normal Login
  const handleLogin = (e) => {
    e.preventDefault();
    SetLoading(true);

    signIn(email, password)
      .then((res) => {
        setUser(res.user);
        toast.success("Login successful!");
        navigate("/");
      })
      .catch((error) => toast.error(error.code))
      .finally(() => SetLoading(false));
  };

  //  Google Login
  const handleGoogle = async () => {
    SetLoading(true);
    try {
      const res = await signInGoogle();
      const user = res.user;

      await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        }),
      });

      setUser(user);
      toast.success("Google login successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.code);
    } finally {
      SetLoading(false);
    }
  };


const handleDemoLogin = () => {
  const demoEmail = "kablumama@gmail.com";
  const demoPassword = "Abc@12";

  setEmail(demoEmail);
  setPassword(demoPassword);

  
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 via-emerald-100 to-green-200 py-10">
      <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 w-[90%] max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
          Login to <span className="text-green-500">EcoTrack</span>
        </h2>

        
        <button
          onClick={handleDemoLogin}
          disabled={loading}
          className="w-full mb-4 py-3 rounded-xl font-semibold text-green-700 bg-green-100 hover:bg-green-200 transition-all"
        >
           Login as Demo 
        </button>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-gray-700 font-semibold mb-1">
              Password
            </label>
            <input
              type={show ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute top-11 right-8 cursor-pointer"
            >
              {show ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold text-white transition-all ${
              loading
                ? "bg-green-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <div className="my-2 flex justify-between text-sm">
          <Link to="/forgot-password" className="text-gray-400 hover:underline">
            Forgot password?
          </Link>
        </div>

        <div className="divider text-gray-500 text-sm">OR</div>

        <button
          onClick={handleGoogle}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-xl font-semibold transition-all"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-green-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
