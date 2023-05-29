import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AdminDataType } from "../../pages/AdminSignIn";
import adminService from "./adminService";

const admin = JSON.parse(localStorage.getItem('admin')!)


interface AdminState {
    admin: AdminType | null
    users: UserType[]
    isError: boolean
    isSuccess: boolean
    isLoading: boolean
}

const initialState: AdminState = {
    admin: admin ? admin: null,
    users: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
}

//signup the admin
export const adminSignUp = createAsyncThunk('admin/signup', async (admin: AdminDataType) => {
    try {
        return await adminService.signUp(admin)
    } catch (err: any) {
        console.log(err.response.data)
    }
})

export const getAllUsers = createAsyncThunk('admin/getallusers', async () => {
    try {
        return await adminService.getAllUsers()
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
        return await adminService.blockUser(manage)
    } catch (err: any) {
        console.log(err.response.data)
    }
})

export const adminSlice = createSlice({
    name: 'admin',
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
            .addCase(adminSignUp.pending, (state) => {
                state.isLoading = true
            })
            .addCase(adminSignUp.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.admin = action.payload
            })
            .addCase(adminSignUp.rejected, (state) => {
                state.isLoading = false
                state.isError = true,
                state.admin = null
            })
            .addCase(getAllUsers.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.users = action.payload
            })
            .addCase(getAllUsers.rejected, (state) => {
                state.isLoading = false
                state.isError = true,
                state.users = []
            })
    }
})

export default adminSlice.reducer