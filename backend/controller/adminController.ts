import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import { Admin } from "../model/adminModel";
import { User } from "../model/userModel";

export const signupAdmin = asyncHandler(async (req: Request, res: Response) => {
  const { name, password } = req.body;

  if (!name || !password) {
    res.status(400).json("all fields are required");
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = await Admin.create({
    name,
    password: hashedPassword,
  });

  res.status(201).json(admin);
});

export const signinAdmin = asyncHandler(async (req: Request, res: Response) => {
  const { name, password } = req.body;

  const oldAdmin = await Admin.findOne({ name });

  if (!oldAdmin) {
    res.status(400).json("You are not an admin");
    return;
  }

  if (await bcrypt.compare(password, oldAdmin!.password)) {
    res.status(200).json(oldAdmin);
  } else {
    res.status(400).json("not allowed");
  }
});

export const getAllUsers = asyncHandler(async (req: Request, res: Response) => {
  const users = await User.find({});

  if (!users.length) {
    res.status(404).json("You have not created blogs yet");
    return;
  }
  res.status(201).json(users);
});
