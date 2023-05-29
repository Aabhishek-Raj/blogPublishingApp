import express from "express";
import { adminSignIn, blockUser, getAllUsers, signinUser, signupUser } from "../controller/userController";

const router = express.Router();

router.post("/signup", signupUser);
router.post("/signin", signinUser);
router.post("/adminsignin", adminSignIn);
router.get("/getallusers", getAllUsers);
router.post("/blockuser", blockUser);

export default router; 
