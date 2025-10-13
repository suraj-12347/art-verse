import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import artverse from "../assets/mypic.jpg";

const ChallengePage = ({ isAdmin }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Thanks for participating!");
    reset();
  };
  

  // Example flag (backend ya context se aa sakta hai)
  const challengeActive = true; // <-- Isko false karne par "Coming Soon" dikhega

  // Agar Challenge Active Nahi Hai:
  if (!challengeActive) {
    return (
      <div className="pl-40 pt-20 w-full flex  flex-col justify-center items-center min-h-screen">
        <h1 className="text-3xl font-semibold text-[var(--primary)]">
          🎨 Challenge Coming Soon!
        </h1>
        {isAdmin && (
            <button
              onClick={() => navigate("/add-challenge")}
              className="mt-6 px-4 py-2 bg-[var(--primary)] text-white rounded-md font-semibold"
            >
              + Add Challenge
            </button>
          )}
        

      </div>
    );
  }

  // ✅ Agar Challenge Active Hai To Ye Wala Code Return Hoga:
  return (
    <div className="challange-page pl-40 pt-20 w-full">
      <div className="min-h-screen flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row p-3 md:p-6">
        {/* LEFT SIDE */}
        <div className="challange-page-content w-full md:w-1/2 p-6 bg-white rounded-2xl m-2 h-1/2">
          <div className="item-center w-full h-50 border-2 rounded-2xl border-[var(--secondary)] overflow-hidden">
            <img
              src={artverse}
              alt="Challenge Preview"
              className="w-full object-cover h-full rounded-lg mb-4"
            />
          </div>
          <h1 className="text-xl font-bold mt-3 text-[var(--primary)]">
            🎨 Challenge Title
          </h1>

          <p className="mt-3 text-[var(--dark)]">
            Ye challenge art creativity ko explore karne ke liye hai. Apne mood,
            style aur creativity ke hisab se art submit karo...
            Ye challenge art creativity ko explore karne ke liye hai. Apne mood,
            style aur creativity ke hisab se art submit karo...
          </p>
          <div className="mt-4">
            <p>
              <strong className="text-[var(--accent)]">Start Date:</strong> 12 Oct 2025
            </p>
            <p>
              <strong className="text-[var(--accent)]">Last Submission Date:</strong> 25 Oct 2025
            </p>
          </div>

          {isAdmin && (
            <button
              onClick={() => navigate("/add-challenge")}
              className="mt-6 px-4 py-2 bg-[var(--primary)] text-white rounded-md font-semibold"
            >
              + Add Challenge
            </button>
          )}
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl text-[var(--primary)] font-semibold mb-4">Fill Your Details</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            {/* Image Upload */}
            <div>
              <label
                htmlFor="imageUpload"
                className="bg-[#fff] text-[var(--dark)] h-24 flex items-center justify-start rounded-2xl px-3 py-1 cursor-pointer focus:ring-2 focus:ring-[var(--secondary)]"
              >
                Drop your artwork
              </label>

              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                {...register("image", { required: "Please upload an image" })}
                className="hidden"
              />
            </div>

            {errors.image && (
              <p className="text-red-500 text-sm -mt-2">{errors.image.message}</p>
            )}

            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
              className="bg-[#fff] h-12 focus:outline-none rounded-2xl px-3 py-1 focus:ring-2 focus:ring-[var(--secondary)]"
            />
            {errors.name && (
              <p className="text-red-500 text-sm -mt-2">{errors.name.message}</p>
            )}

            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
              })}
              className="bg-[#fff] h-12 focus:outline-none rounded-2xl px-3 py-1 focus:ring-2 focus:ring-[var(--secondary)]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm -mt-2">{errors.email.message}</p>
            )}

            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: { value: /^[0-9]{10}$/, message: "Enter valid number" },
              })}
              className="bg-[#fff] h-12 focus:outline-none rounded-2xl px-3 py-1 focus:ring-2 focus:ring-[var(--secondary)]"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm -mt-2">{errors.phone.message}</p>
            )}

            <button
              type="submit"
              className="h-12 text-white rounded-2xl px-3 py-1 bg-[var(--primary)]"
            >
              Participate Now
            </button>
          </form>
        </div>
        <ToastContainer position="top-center" autoClose={2500} />
      </div>
    </div>
  );
};

 


export default ChallengePage;
