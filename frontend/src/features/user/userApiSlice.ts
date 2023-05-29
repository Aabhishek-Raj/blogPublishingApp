import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SignUpDataType } from '../../pages/SignUp'
import { SignInDataType } from '../../pages/SignIn'

export const userApiSlice = createApi({
    reducerPath: "userApiSlice",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/users/'}),
    endpoints: builder => ({
        signUp: builder.mutation({
            query: (body: SignUpDataType) => {
                return {
                    url: "/signup",
                    method: "post",
                    body
                }
            }
        }),
        signIn: builder.mutation({
            query: (body: SignInDataType) => {
                return {
                    url: "signin",
                    method: "post",
                    body
                }
            }
        }) 
    })
})

export const { useSignInMutation, useSignUpMutation } = userApiSlice
