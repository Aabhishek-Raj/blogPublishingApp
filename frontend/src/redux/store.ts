import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import userReducer from "../features/user/userSlice";
import authReducer from "../features/user/authSlice";
import { userApiSlice } from "../features/user/userApiSlice";
import { blogApiSlice } from "../features/blog/blogApiSlice";

export const store = configureStore({
  reducer: {
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [blogApiSlice.reducerPath]: blogApiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
        .concat(userApiSlice.middleware)
        .concat(blogApiSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
