import express from "express";
import { saveBlog, getBlogs, editBlog, getPendingBlogs, publishBlog, getLiveBlogs, deleteBlog, rejectBlog } from "../controller/blogController";

const router = express.Router();

router.post("/save", saveBlog);
router.get("/getblogs/:id", getBlogs)
router.put("/editblog", editBlog)
// router.put("/editblog", editBlog) 
router.get("/getpendingblogs", getPendingBlogs)
router.get("/getliveblogs", getLiveBlogs)
router.put("/publishblog/:id", publishBlog)
router.delete("/deleteblog/:id", deleteBlog)
router.post("/rejectblog", rejectBlog)            

export default router;        