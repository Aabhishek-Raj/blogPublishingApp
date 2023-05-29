import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SignUpDataType } from "../../pages/SignUp";
import userService from "./userService";
import { SignInDataType } from "../../pages/SignIn";

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
export const signUp = createAsyncThunk('user/signup', async (user: SignUpDataType) => {
    try {
        return await userService.signUp(user)
    } catch (err: any) {
        console.log(err.response.data)
    }
})
//signin the user
export const signIn = createAsyncThunk('user/signup', async (user: SignInDataType) => {
    try {
        return await userService.signIn(user)
    } catch (err: any) {
        console.log(err.response.data)
    }
})

//signup the admin
export const adminSignIn = createAsyncThunk('admin/signup', async (admin: SignInDataType, thunkAPI) => {
    try {
        return await userService.adminSignIn(admin)
    } catch (err: any) {
        console.log(err.response)
        throw new Error(err.response)
    }
})

export const getAllUsers = createAsyncThunk('admin/getallusers', async () => {
    try {
        return await userService.getAllUsers()
    } catch (err: any) {
        console.log(err.response.data)
    }
})

export type BlockUserArg = {
    userId: string;
    action: 'BLOCK' | 'UNBLOCK';
  };

export const blockUser = createAsyncThunk('admin/blockuser', async (manage: BlockUserArg) => {
    try {
        return await userService.blockUser(manage)
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
                console.log(action.payload)
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(signUp.rejected, (state) => {
                state.isLoading = false
                state.isError = true,
                state.user = null
            })
            .addCase(adminSignIn.pending, (state) => {
                state.isLoading = true
            })
            .addCase(adminSignIn.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(adminSignIn.rejected, (state) => {
                state.isLoading = false
                state.isError = true,
                state.user = null
            })
    }
})

export default userSlice.reducer