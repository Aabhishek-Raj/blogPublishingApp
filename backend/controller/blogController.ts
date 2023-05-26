import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { Blog } from "../model/blogModel";

export const saveBlog = asyncHandler(async (req: Request, res: Response) => {
  const { userId, heading, subject, blog } = req.body;

  if (!userId || !heading || !subject || !blog) {
    res.status(400).json("All fields are required");
  }

  const userBlog = await Blog.create({
    userId,
    heading,
    subject,
    blog,
  });
  console.log(userBlog);

  res.status(201).json(userBlog);
});

export const getBlogs = asyncHandler(async (req: Request, res: Response) => {
  const { userId } = req.query;

  if (!userId) {
    res.status(401).json("You are not authorized"); 
  }

  const blogs = await Blog.find({userId: userId}); 

  if (!blogs.length) {
    res.status(404).json("You have not created blogs yet");
  } else {
    res.status(201).json(blogs);
  }
});

export const editBlog = asyncHandler(async (req: Request, res: Response) => {
  const { userId, heading, subject, blog } = req.body;

  if (!userId || !heading || !subject || !blog) {
    res.status(400).json("All fields are required");
  }

  const editedBlog = await Blog.findOneAndUpdate({
    userId,
    heading,
    subject,
    blog,
  });

  console.log(editedBlog);
  res.status(201).json(editedBlog);
})