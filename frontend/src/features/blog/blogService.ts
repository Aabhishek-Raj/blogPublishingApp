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

const getPendingBlogs = async () => {
    const response = await axios.get(API_URL + "getpendingblogs")
    return response.data
}

const getLiveBlogs = async () => {
    const response = await axios.get(API_URL + "getliveblogs")
    return response.data
}

const publishBlog = async (blogId: any) => {
        const response = await axios.get(API_URL + "publishblog", { params: { blogId }})
        return response.data
}

const deleteBlog = async (blogId: any) => {
        const response = await axios.get(API_URL + "deleteblog", { params: { blogId }})
        return response.data
}

const rejectBlog = async (rejectData: any) => {
        const response = await axios.post(API_URL + "rejectblog", rejectData)
        return response.data
}

const blogService = { 
    saveBlog, 
    getBlogs,
    editBlog,
    getPendingBlogs,
    publishBlog,
    getLiveBlogs,
    deleteBlog,
    rejectBlog
}

export default blogService 