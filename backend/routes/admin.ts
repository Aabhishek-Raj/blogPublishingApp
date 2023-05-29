import express from "express";
import { blockUser, getAllUsers, signinAdmin, signupAdmin } from "../controller/adminController";

const router = express.Router();

router.post("/signup", signupAdmin);
router.post("/signin", signinAdmin);
router.get("/getallusers", getAllUsers);
router.patch("/blockuser", blockUser);

export default router;
 