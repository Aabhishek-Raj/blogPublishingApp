import express, { Request, Response } from "express";
import { signinUser, signupUser } from "../controller/userController";

const router = express.Router();

router.post("/signup", signupUser);
router.post("/signin", signinUser);

export default router; 
