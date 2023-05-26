import express from "express";
import { getAllUsers, signinAdmin, signupAdmin } from "../controller/adminController";

const router = express.Router();

router.post("/signup", signupAdmin);
router.post("/signin", signinAdmin);
router.get("/getallusers", getAllUsers);

export default router;
 