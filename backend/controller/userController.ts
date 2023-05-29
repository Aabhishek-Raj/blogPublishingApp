import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../model/userModel";

export const signupUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, phone, password } = req.body;        

  if (!name || !password || !email || !phone) {
    res.status(400).json("all fields are required");
    return;
  }
  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json("user already exists");
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    phone,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json("Invalid data");
  }
});

export const signinUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const oldUser = await User.findOne({ email });

  if (!oldUser) {
    res.status(400).json("You are not an user");
    return;
  }

  if (!oldUser.isActive) {
    res.status(400).json("You have been blocked by the admin")
  }

  if (await bcrypt.compare(password, oldUser!.password)) {
    res.status(200).json({
      _id: oldUser.id,
      name: oldUser.name,
      email: oldUser.email,
      role: oldUser.role,
      token: generateToken(oldUser._id),
    });
  } else {
    res.status(400).json("not allowed");
  }
});

export const adminSignIn = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const oldUser = await User.findOne({ email });

  if (!oldUser) {
    res.status(400).json("You are not an user");
    return;
  }

  if(oldUser.role !== "ADMIN") {
    res.status(401).json("You are not an admin")
    return
  }

  if (await bcrypt.compare(password, oldUser!.password)) {
    res.status(200).json({
      _id: oldUser.id,
      name: oldUser.name,
      email: oldUser.email,
      role: oldUser.role,
      token: generateToken(oldUser._id),
    });
  } else {
    res.status(400).json("not allowed");
  }
});

const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: "10h",
  });
};

export const getAllUsers = asyncHandler(async (req: Request, res: Response) => {
  console.log('vanna')
  const users = await User.find({});

  if (!users.length) {
    res.status(404).json("You have not created blogs yet");
    return;
  }
  res.status(201).json(users);
});

export const blockUser = asyncHandler( async(req: Request, res: Response) => {
  const { userId, action } = req.body

  if(!userId || !action) {
    res.status(400).json("You are not authorised")
    return
  }
  
  if(action === "BLOCK") {
    const blockedUser = await User.findByIdAndUpdate(userId, {isActive: false})
    res.status(200).json(blockedUser)
    return
  }
  if(action === "UNBLOCK") {
    const unBlockedUser = await User.findByIdAndUpdate(userId, {isActive: true})
    res.status(200).json(unBlockedUser)
  }
  res.status(400).json("invalid credentials")
})
