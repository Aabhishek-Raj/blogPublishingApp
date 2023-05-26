import express from "express";
import { saveBlog, getBlogs, editBlog } from "../controller/blogController";

const router = express.Router();

router.post("/save", saveBlog);
router.get("/getblogs", getBlogs)
router.put("/editblog", editBlog)

export default router; 