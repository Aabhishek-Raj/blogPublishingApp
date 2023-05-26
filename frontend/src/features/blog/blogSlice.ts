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
        return await blogService.saveBlog(blog)
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

export const editBlog = createAsyncThunk('blog/editblog', async (blog: BlogDataType) => {
    try {
        return await blogService.editBlog(blog)
    } catch(err: any) {
        console.error(err.response)
    }
})

export const getPendingBlogs = createAsyncThunk('blog/getpendingblogs', async () => {
    try {
        return await blogService.getPendingBlogs()
    } catch (err: any) {
        console.error(err.response)
    }
})

export const getLiveBlogs = createAsyncThunk('blog/getliveblogs', async () => {
    try {
        return await blogService.getLiveBlogs()
    } catch (err: any) {
        console.error(err.response)
    }
})

export const publishBlog = createAsyncThunk('blog/publishblog', async (blogId: any) => {
    try {
        return await blogService.publishBlog(blogId)
    } catch (err: any) {
        console.error(err.response)
    }
})

export const deleteBlog = createAsyncThunk('blog/deleteblog', async (blogId: any) => {
    try {
        return await blogService.deleteBlog(blogId)
    } catch (err: any) {
        console.error(err.response)
    }
})

export const rejectBlog = createAsyncThunk('blog/rejectblog', async (rejectData: any) => {
    try {
        return await blogService.rejectBlog(rejectData)
    } catch (err: any) {
        console.error(err.response)
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
                state.blog?.push(action.payload)
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
                state.blog = action.payload
            })
            .addCase(getBlogs.rejected, (state) => {
                state.isLoading = false
                state.isError = true,
                state.blog = null
            })
            .addCase(getPendingBlogs.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPendingBlogs.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.blog = action.payload
            })
            .addCase(getPendingBlogs.rejected, (state) => {
                state.isLoading = false
                state.isError = true,
                state.blog = null
            })
            .addCase(getLiveBlogs.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getLiveBlogs.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.blog = action.payload
            })
            .addCase(getLiveBlogs.rejected, (state) => {
                state.isLoading = false
                state.isError = true,
                state.blog = null
            })
            .addCase(deleteBlog.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteBlog.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.blog = action.payload
            })
            .addCase(deleteBlog.rejected, (state) => {
                state.isLoading = false
                state.isError = true,
                state.blog = null
            })
    }
})

export default blogSlice.reducer