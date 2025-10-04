

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fake async upload
export const uploadPost = createAsyncThunk(
  "upload/uploadPost",
  async (formData, { rejectWithValue }) => {
    try {
      // Fake delay 2 sec
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return { message: "Upload successful", data: formData };
    } catch (err) {
      return rejectWithValue("Upload Failed");
    }
  }
);

const uploadSlice = createSlice({
  name: "upload",
  initialState: {
    loading: false,
    success: false,
    error: null,
    uploadedData: null, // optional, show preview after upload
  },
  reducers: {
    resetUpload: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.uploadedData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadPost.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.uploadedData = action.payload.data;
      })
      .addCase(uploadPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetUpload } = uploadSlice.actions;
export default uploadSlice.reducer;
