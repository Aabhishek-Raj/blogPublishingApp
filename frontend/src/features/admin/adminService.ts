import axios from 'axios'
import { AdminDataType } from '../../pages/AdminSignIn'
import { BlockUserArg } from './adminSlice'

const API_URL = 'http://localhost:5000/api/admin/'

//Register admin
const signUp = async (adminData: AdminDataType) => {
    const response = await axios.post(API_URL + "signup", adminData)

    if (response.data){
        localStorage.setItem('admin', JSON.stringify(response.data))
    }
    return response.data    
}

//get all users
const getAllUsers = async () => {
    const response = await axios.get(API_URL + "getallusers")

    // if (response.data){
    //     localStorage.setItem('users', JSON.stringify(response.data))
    // }
    return response.data
}

const blockUser = async (manage: BlockUserArg) => {
    const response = await axios.patch(API_URL + "blockuser", manage)

    return response.data
}



const adminService = { 
    signUp, 
    getAllUsers,
    blockUser
}

export default adminService