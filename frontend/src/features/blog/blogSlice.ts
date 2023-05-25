import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BlogDataType } from "../../pages/Home";
import blogService from "./blogService";

const blog = JSON.parse(localStorage.getItem('blog')!)


interface BlogState {
    blog: BlogType[] | null
    isError: boolean
    isSuccess: boolean
    isLoading: boolean
}

const initialState: BlogState = {
    blog: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
}

//getBlogs the blog
export const saveBlog = createAsyncThunk('blog/saveblog', async (blog: BlogDataType) => {
    try {
        return await blogService.getBlogs(blog)
    } catch (err: any) {
        console.log(err.response.data)
    }
})

export const getBlogs = createAsyncThunk('blog/getBlog', async (_, thunkApi: any) => {
    try {
        const user = thunkApi.getState().user.user
        return await blogService.getBlogs(user._id)
    } catch (err: any) { 
        console.log(err.response.data)       
    }
})
export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveBlog.pending, (state) => {
                state.isLoading = true
            })
            .addCase(saveBlog.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.blog?.push(action.payload.data)
            })
            .addCase(saveBlog.rejected, (state) => {
                state.isLoading = false
                state.isError = true,
                state.blog = null
            })
            .addCase(getBlogs.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getBlogs.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.blog = action.payload.data
            })
            .addCase(getBlogs.rejected, (state) => {
                state.isLoading = false
                state.isError = true,
                state.blog = null
            })
    }
})

export default blogSlice.reducer