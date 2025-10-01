import { createSlice } from "@reduxjs/toolkit";
import { posts as staticPosts } from "../../assets/data";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    loading: true,   // ✅ Add loading here
    error: null,
  },
  reducers: {
    setPosts(state, action) {
      state.data = action.payload;
      state.loading = false; // ✅ Done loading
    },
  },
});

export const { setPosts } = postSlice.actions;
export default postSlice.reducer;
