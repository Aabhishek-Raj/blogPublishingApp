import axios from 'axios'
import { UserDataType } from '../../pages/SignUp'

const API_URL = 'http://localhost:5000/api/users/'

//Register user
const signUp = async (userData: UserDataType) => {
    const response = await axios.post(API_URL + "signup", userData)

    if (response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const userService = { 
    signUp, 
}

export default userService