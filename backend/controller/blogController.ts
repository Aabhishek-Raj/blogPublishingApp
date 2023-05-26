import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { Blog } from "../model/blogModel";

export const saveBlog = asyncHandler(async (req: Request, res: Response) => {
  const { userId, heading, subject, blog } = req.body;

  if (!userId || !heading || !subject || !blog) {
    res.status(400).json("All fields are required");
    return;
  }

  const userBlog = await Blog.create({
    userId,
    heading,
    subject,
    blog,
  });

  res.status(201).json(userBlog);
});

export const getBlogs = asyncHandler(async (req: Request, res: Response) => {
  const { userId } = req.query;

  if (!userId) {
    res.status(401).json("You are not authorized");
    return;
  }

  const blogs = await Blog.find({ userId: userId });

  if (!blogs.length) {
    res.status(404).json("You have not created blogs yet");
    return;
  }
  res.status(201).json(blogs);
});

export const editBlog = asyncHandler(async (req: Request, res: Response) => {
  const { userId, heading, subject, blog } = req.body;

  if (!userId || !heading || !subject || !blog) {
    res.status(400).json("All fields are required");
    return;
  }

  const editedBlog = await Blog.findOneAndUpdate({
    userId,
    heading,
    subject,
    blog,
  });

  res.status(201).json(editedBlog);
});

export const getPendingBlogs = asyncHandler(
  async (req: Request, res: Response) => {
    const pendingBlogs = await Blog.find({ status: "Pending" });

    if (!pendingBlogs) {
      res.status(400).json(" no pendingBlogs");
      return; 
    }
    res.status(200).json(pendingBlogs);
  }
);

export const getLiveBlogs = asyncHandler(
  async (req: Request, res: Response) => {
    const liveBlogs = await Blog.find({ status: "Publish" });

    if (!liveBlogs) {
      res.status(400).json(" no pendingBlogs");
      return; 
    }
    res.status(200).json(liveBlogs);
  } 
);

export const publishBlog = asyncHandler( async(req: Request, res: Response) => {
  const { blogId } = req.query

  const updatedBlog = await Blog.updateOne({_id: blogId }, { status: "Publish"})
  console.log(updatedBlog)        

  res.status(200).json(updatedBlog)
})

export const deleteBlog = asyncHandler( async(req: Request, res: Response) => {
  const { blogId } = req.query
  console.log('deleted')

  const deletedBlog = await Blog.deleteOne({_id: blogId })  
  console.log(deletedBlog)      

  res.status(200).json(deletedBlog)
})

export const rejectBlog = asyncHandler( async(req: Request, res: Response) => {
  const { blogId, reasonData } = req.body

  const updatedBlog = await Blog.updateOne({_id: blogId }, { status: "Rejected", rejectedReason: reasonData})
  console.log(updatedBlog)        

  res.status(200).json(updatedBlog)
})  
