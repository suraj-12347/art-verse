import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { uploadPost, resetUpload } from "../redux/slices/uploadSlice";

const UploadPage = () => {
  const dispatch = useDispatch();
  const { loading, success, error, uploadedData } = useSelector(
    (state) => state.upload
  );

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

    // File type & size validation
    if (!file) return;
    if (
      file.type.startsWith("image/") &&
      file.size > 20 * 1024 * 1024 // 20MB
    ) {
      setError("file", { type: "manual", message: "Image max size 20MB" });
      return;
    }
    if (
      file.type.startsWith("video/") &&
      file.size > 200 * 1024 * 1024 // 200MB
    ) {
      setError("file", { type: "manual", message: "Video max size 200MB" });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", data.title);
    formData.append("mood", data.mood);
    formData.append("description", data.description);
    formData.append("buyLink", data.buyLink);

    dispatch(uploadPost(formData));
    reset();
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => dispatch(resetUpload()), 3000);
    }
  }, [success, dispatch]);

  return (
   <div className=" upload w-full xl:pl-60 pt-30 pr-0 md:pl-40 ">
     <div className="upload flex  p-5 xl:gap-15 md:gap-10">
      {/* Left Column - File Upload */}
      <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3  max-h-110 h-110 flex flex-col  items-center justify-center bg-white rounded-4xl border-gray-300 rounded p-4">
        <label className="cursor-pointer flex flex-col items-center justify-center h-full w-full text-gray-500   rounded hover:border-[var(--secondary)]">
          {fileWatch && fileWatch[0] ? (
            fileWatch[0].type.startsWith("image/") ? (
              <img
                src={URL.createObjectURL(fileWatch[0])}
                alt="preview"
                className="max-h-80 object-contain"
              />
            ) : (
              <video
                src={URL.createObjectURL(fileWatch[0])}
                controls
                className="max-h-80"
              />
            )
          ) : (
            <p>Click to upload Image/Video </p>
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
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/3  flex flex-col gap-4">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          {/* Title */}
          <input
            type="text"
            placeholder="Title"
            {...register("title", { required: "Title is required" })}
            className="bg-[#fff] h-12 focus:outline-none rounded-2xl px-3 py-1 focus:ring-2 focus:ring-[var(--secondary)]"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}

          {/* Mood */}
          <input
            type="text"
            placeholder="Mood or Emotion"
            {...register("Mood", { required: "mood is required" })}
            className="bg-[#fff] h-12 focus:outline-none rounded-2xl px-3 py-1 focus:ring-2 focus:ring-[var(--secondary)]"
          />
          {errors.mood && <p className="text-red-500">{errors.mood.message}</p>}

          {/* Description */}
          <textarea
            placeholder="Detailed Description"
            {...register("description", {
              required: "Description is required",
            })}
            className="bg-[#fff] h-35 focus:outline-none rounded-2xl px-3 py-1 focus:ring-2 focus:ring-[var(--secondary)]"
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}

          {/* Buy Link */}
          <input
            type="url"
            placeholder="Buy Link"
            {...register("buyLink", {
              required: "Buy Link is required",
              pattern: {
                value:
                  /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/,
                message: "Enter a valid URL",
              },
            })}
            className="bg-[#fff] h-12 focus:outline-none rounded-2xl px-3 py-1 focus:ring-2 focus:ring-[var(--secondary)]"
          />
          {errors.buyLink && (
            <p className="text-red-500">{errors.buyLink.message}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-[var(--primary)] h-12 focus:outline-none rounded-2xl px-3 py-1  hover:bg-[var(--secondary)]"
          >
            {loading ? "Uploading..." : "Upload"}
          </button>
        </form>

        {/* Success/Error Messages */}
        {success && <p className="text-green-500 mt-2">Uploaded successfully!</p>}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
   </div>
  );
};

export default UploadPage;
