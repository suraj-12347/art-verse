import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // ✅ Added
import artverseImg from "../assets/artverse.png";
import "./login.css";

const LandingPage = () => {
  const [showSignup, setShowSignup] = useState(false);
  const dispatch = useDispatch(); // ✅ Added
  const navigate = useNavigate(); // ✅ Added

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const toggleForm = () => {
    setShowSignup(!showSignup);
    reset(); // Reset form on toggle
  };

  const onLoginSubmit = (data) => {
    console.log("Login Data:", data);
    dispatch(login({ email: data.email })); // ✅ Local Auth
    navigate("/home"); // ✅ Redirect
  };

  const onSignupSubmit = (data) => {
    console.log("Signup Data:", data);
    dispatch(login({ email: data.email })); // ✅ Auto Login after signup
    navigate("/home"); // ✅ Redirect
  };

  return (
    <div className="login-page p-5 py-10 pl-10 w-full h-[100vh] min-h-screen flex items-center justify-center sm:gap-y-5 flex-col lg:flex-row bg-[#fff] relative">
      <div className="body-2 w-full h-full lg:w-full md:w-full flex lg:gap-2 md:gap-10 gap-10 flex-col xl:flex-row items-center justify-around bg-[var(--bg)] relative">
        
        {/* Left Side */}
        <div className="h-full w-full px-10 lg:w-1/3 flex flex-col items-center justify-center spining-logo">
          <div className="w-full lg:max-w-lg flex flex-col items-center justify-center gap-5 relative artverse">
            <img className="z-10 art-verse" src={artverseImg} alt="ArtVerse Logo" />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:p-20 md:p-20 flex xl:w-1/2 flex-col justify-center items-center">
          {!showSignup ? (
            // Login Form
            <form
              onSubmit={handleSubmit(onLoginSubmit)}
              className="w-full rounded-xl p-3 py-1"
            >
              <div className="text-center">
                <p className="text-[var(--primary)] text-3xl font-bolder font-semibold">Welcome back!</p>
              </div>

              <div className="flex flex-col p-8 gap-y-2">
                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label className="text-[var(--dark)] font-small">Email Address</label>
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    placeholder="email@example.com"
                    className="bg-[#fff] h-10 focus:outline-none rounded-lg px-3 py-1 focus:ring-2 focus:ring-[var(--secondary)]"
                  />
                  {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1">
                  <label className="text-[var(--dark)] font-small">Password</label>
                  <input
                    type="password"
                    {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                    placeholder="your password"
                    className="bg-[#fff] h-10 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
                  />
                  {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                </div>

                <span className="text-sm text-[var(--dark)] hover:text-[var(--accent)] hover:underline cursor-pointer">
                  Forget Password?
                </span>

                <button
                  type="submit"
                  className="w-full h-10 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--secondary)] transition"
                >
                  Login
                </button>

                <div className="flex items-center my-2">
                  <div className="flex-1 h-px bg-gray-300"></div>
                  <span className="px-3 text-sm text-gray-500">OR</span>
                  <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                <button
                  type="button"
                  onClick={() => { dispatch(login({ email: "google@mock.com" })); navigate("/home"); }} // ✅ Even Google Button Works
                  className="w-full py-2 font-semibold rounded-lg shadow-md hover:opacity-90 transition"
                  style={{ backgroundColor: "var(--accent)", color: "#fff" }}
                >
                  Continue with Google
                </button>

                <p className="text-center text-sm mt-6" style={{ color: "var(--dark)" }}>
                  Don’t have an account?{" "}
                  <span
                    onClick={toggleForm}
                    className="cursor-pointer text-[var(--secondary)] font-semibold hover:underline"
                  >
                    Sign Up
                  </span>
                </p>
              </div>
            </form>
          ) : (
            // Signup Form
            <form
              onSubmit={handleSubmit(onSignupSubmit)}
              className="w-full rounded-xl p-3 py-1"
            >
              <div className="text-center">
                <p className="text-[var(--primary)] text-3xl font-bolder font-semibold">Create Account</p>
              </div>

              <div className="flex flex-col p-8 gap-y-2">
                {/* Full Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-[var(--dark)] font-small">Full Name</label>
                  <input
                    type="text"
                    {...register("fullname", { required: "Full Name is required" })}
                    placeholder="Your full name"
                    className="bg-[#fff] h-10 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
                  />
                  {errors.fullname && <span className="text-red-500 text-sm">{errors.fullname.message}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label className="text-[var(--dark)] font-small">Email Address</label>
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    placeholder="email@example.com"
                    className="bg-[#fff] h-10 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
                  />
                  {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1">
                  <label className="text-[var(--dark)] font-small">Password</label>
                  <input
                    type="password"
                    {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                    placeholder="Choose a password"
                    className="bg-[#fff] h-10 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
                  />
                  {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                </div>

                <button
                  type="submit"
                  className="w-full h-10 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--secondary)] transition"
                >
                  Sign Up
                </button>

                <p className="text-center text-sm mt-6" style={{ color: "var(--dark)" }}>
                  Already have an account?{" "}
                  <span
                    onClick={toggleForm}
                    className="cursor-pointer text-[var(--secondary)] font-semibold hover:underline"
                  >
                    Login
                  </span>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
