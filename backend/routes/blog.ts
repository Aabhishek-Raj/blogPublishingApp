import express, { Request, Response } from "express";
import { saveBlog, getBlogs } from "../controller/blogController";

const router = express.Router();

router.post("/save", saveBlog);
router.get("/getblogs", getBlogs)

export default router; 