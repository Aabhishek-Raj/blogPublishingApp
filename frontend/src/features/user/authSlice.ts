import { createSlice } from '@reduxjs/toolkit'

interface UserState {
    user: UserType | null
}

const user = JSON.parse(localStorage.getItem('user')!)

const initialState: UserState = {
    user: user ? user: null
}
const authSlice = createSlice({
    name: 'auth',
initialState,
    reducers: {
        setCredentials: (state, action) => {
            // const { accessToken } = action.payload
            state.user = action.payload.data
            localStorage.setItem('user', JSON.stringify(action.payload.data))
        },
        logOut: (state) => {
            state.user = null
            localStorage.removeItem('user');
        },
    }
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

// export const selectCurrentToken = (state) => state.auth.token