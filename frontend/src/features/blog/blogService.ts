import axios from 'axios'
import { BlogDataType } from '../../pages/Home'

const API_URL = 'http://localhost:5000/api/blogs/'

//Saving blog
const saveBlog = async (blogData: BlogDataType) => {
    const response = await axios.post(API_URL + "save", blogData)

    if (response.data){
        localStorage.setItem('blog', JSON.stringify(response.data))
    }
    return response.data
}

const getBlogs = async (userId: any) => {
    
    const response = await axios.get(API_URL + "getblogs", { params: { userId }})

    if (response.data){
        localStorage.setItem('blog', JSON.stringify(response.data))
    }
    return response.data
}

const editBlog = async (blogData: BlogDataType) => {
    const response = await axios.put(API_URL + "editblog", blogData) 

    if(response.data) {
        localStorage.setItem('blog', JSON.stringify(response.data))
    }
    return response.data
}

const blogService = { 
    saveBlog, 
    getBlogs,
    editBlog
}

export default blogService 