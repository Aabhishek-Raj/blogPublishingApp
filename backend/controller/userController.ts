import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import { User } from "../model/userModel";

export const signupUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, password } = req.body;

  if (!name || !password) {
    res.status(400).json("all fields are required");
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    password: hashedPassword,
  });

  res.status(201).json(user);
});

export const signinUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, password } = req.body;

  const oldUser = await User.findOne({ name });

  if (!oldUser) {
    res.status(400).json("You are not an user");
    return;
  }

  if (await bcrypt.compare(password, oldUser!.password)) {
    res.status(200).json(oldUser);
  } else {
    res.status(400).json("not allowed");
  }
});
