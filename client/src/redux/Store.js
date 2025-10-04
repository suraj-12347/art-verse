import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import postReducer from './slices/postSlice'
import  uploadReducer  from "./slices/uploadSlice";

import searchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
    search: searchReducer,
    upload:uploadReducer, // ✅ Add this
  },
});

