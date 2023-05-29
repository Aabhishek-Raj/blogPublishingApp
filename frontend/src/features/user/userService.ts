import axios from 'axios'
import { SignUpDataType } from '../../pages/SignUp'
import { SignInDataType } from '../../pages/SignIn'
import { BlockUserArg } from './userSlice'

const API_URL = 'http://localhost:5000/api/users/'

//Signup user
const signUp = async (userData: SignUpDataType) => {
    const response = await axios.post(API_URL + "signup", userData)

    if (response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}
//Signin user
const signIn = async (userData: SignInDataType) => {
    const response = await axios.post(API_URL + "signin", userData)

    if (response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const adminSignIn = async (adminData: SignInDataType) => {
    const response = await axios.post(API_URL + "adminsignin", adminData)

    if (response.data){
        localStorage.setItem('admin', JSON.stringify(response.data))
    }
    return response.data
}

const getAllUsers = async () => {
    const response = await axios.get(API_URL + "getallusers")

    return response.data
}

const blockUser = async (manage: BlockUserArg) => {
    const response = await axios.patch(API_URL + "blockuser", manage)

    return response.data
}

const userService = { 
    signUp, 
    signIn,
    adminSignIn,
    getAllUsers,
    blockUser

}

export default userService