import express from "express";
import { saveBlog, getBlogs, editBlog, getPendingBlogs, publishBlog, getLiveBlogs, deleteBlog, rejectBlog } from "../controller/blogController";

const router = express.Router();

router.post("/save", saveBlog);
router.get("/getblogs", getBlogs)
router.put("/editblog", editBlog)
// router.put("/editblog", editBlog) 
router.get("/getpendingblogs", getPendingBlogs)
router.get("/getliveblogs", getLiveBlogs)
router.get("/publishblog", publishBlog)
router.get("/deleteblog", deleteBlog)
router.post("/rejectblog", rejectBlog)            

export default router;        