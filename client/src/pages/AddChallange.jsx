import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { uploadPost, resetUpload } from "../redux/slices/uploadSlice";

const AddChallenge = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.upload);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  const fileWatch = watch("file");

  const onSubmit = (data) => {
    const file = data.file[0];

    if (!file) return;

    // Only image allowed & max 20MB
    if (!file.type.startsWith("image/")) {
      setError("file", { type: "manual", message: "Only images allowed" });
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      setError("file", { type: "manual", message: "Image max size 20MB" });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("startDate", data.startDate);
    formData.append("endDate", data.endDate);

    dispatch(uploadPost(formData));
    reset();
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => dispatch(resetUpload()), 3000);
    }
  }, [success, dispatch]);

  return (
    <div className="upload w-full xl:pl-60 pt-30 pr-0 md:pl-40  ">
     
      <div className="upload flex p-5 xl:gap-15 md:gap-10">
       
        {/* Left Column - Image Upload */}
        <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 max-h-110 h-110 flex flex-col items-center justify-center bg-white rounded-4xl border-gray-300 p-4">
          <label className="cursor-pointer flex flex-col items-center justify-center h-full w-full text-gray-500 rounded hover:border-[var(--secondary)]">
            {fileWatch && fileWatch[0] ? (
              <img
                src={URL.createObjectURL(fileWatch[0])}
                alt="preview"
                className="max-h-80 object-contain"
              />
            ) : (
              <p>Click to upload Challenge Image</p>
            )}
            <input
              type="file"
              {...register("file", { required: "File is required" })}
              className="hidden"
            />
          </label>
          {errors.file && (
            <p className="text-red-500 mt-2">{errors.file.message}</p>
          )}
        </div>

        {/* Right Column - Form Inputs */}
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/3 flex flex-col gap-4">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            {/* Title */}
            <input
              type="text"
              placeholder="Title"
              {...register("title", { required: "Title is required" })}
              className="bg-[#fff] h-12 focus:outline-none rounded-2xl px-3 py-1 focus:ring-2 focus:ring-[var(--secondary)]"
            />
            {errors.title && <p className="text-red-500">{errors.title.message}</p>}

            {/* Description */}
            <textarea
              placeholder="Detailed Description"
              {...register("description", { required: "Description is required" })}
              className="bg-[#fff] h-35 focus:outline-none rounded-2xl px-3 py-1 focus:ring-2 focus:ring-[var(--secondary)]"
            />
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}

<div className="relative w-full">
  <input
    type="date"
    {...register("startDate", { required: "Start date is required" })}
    className="bg-[#fff] h-12 w-full focus:outline-none rounded-2xl px-3 pt-5 pb-1 focus:ring-2 focus:ring-[var(--secondary)]"
  />
  <label className="absolute left-3 top-1 text-gray-400 text-sm pointer-events-none">
    Start Date
  </label>
  {errors.startDate && (
    <p className="text-red-500 text-sm">{errors.startDate.message}</p>
  )}
</div>

<div className="relative w-full">
  <input
    type="date"
    {...register("endDate", { required: "End date is required" })}
    className="bg-[#fff] h-12 w-full focus:outline-none rounded-2xl px-3 pt-5 pb-1 focus:ring-2 focus:ring-[var(--secondary)]"
  />
  <label className="absolute left-3 top-1 text-gray-400 text-sm pointer-events-none">
    End Date
  </label>
  {errors.endDate && (
    <p className="text-red-500 text-sm">{errors.endDate.message}</p>
  )}
</div>

            {errors.endDate && (
              <p className="text-red-500">{errors.endDate.message}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-[var(--primary)] h-12 focus:outline-none rounded-2xl px-3 py-1 hover:bg-[var(--secondary)]"
            >
              {loading ? "Uploading..." : "Add Challenge"}
            </button>
          </form>

          {/* Success/Error Messages */}
          {success && <p className="text-green-500 mt-2">Challenge added successfully!</p>}
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default AddChallenge;
