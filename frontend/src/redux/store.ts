import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import blogReducer from "../features/blog/blogSlice";
import adminReducer from "../features/admin/adminSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        blog: blogReducer,
        admin: adminReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch