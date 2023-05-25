import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserDataType } from "../../pages/SignUp";
import userService from "./userService";

const user = JSON.parse(localStorage.getItem('user')!)


interface UserState {
    user: UserType | null
    isError: boolean
    isSuccess: boolean
    isLoading: boolean
}

const initialState: UserState = {
    user: user ? user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
}

//signup the user
export const signUp = createAsyncThunk('user/signup', async (user: UserDataType) => {
    try {
        return await userService.signUp(user)
    } catch (err: any) {
        console.log(err.response.data)
    }
})
export const userSlice = createSlice({
    name: 'user',
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
            .addCase(signUp.pending, (state) => {
                state.isLoading = true
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload.data
            })
            .addCase(signUp.rejected, (state) => {
                state.isLoading = false
                state.isError = true,
                state.user = null
            })
    }
})

export default userSlice.reducer