import mongoose from "mongoose";

interface BlogDoc extends mongoose.Document {
  userId: string;
  heading: string;
  subject: string;
  blog: string;
}

const blogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "not allowed"],
    ref: "User"
  },
  heading: {
    type: String,
    required: [true, "Please add a heading"],
  },
  subject: {
    type: String,
    required: [true, "Please add a subject"],
  },
  blog: {
    type: String,
    required: [true, "Please add the blog"],
  },
  status: {
    type: String,
    default: "Pending"
  },
});

const Blog = mongoose.model<BlogDoc>("Blog", blogSchema);

export { Blog };
