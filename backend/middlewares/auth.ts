import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { User } from "../model/userModel";
import { NextFunction, Request, Response } from "express";

interface DecodedToken {
  id: string;
}

interface CustomRequest extends Request {
  user: any; 
}

const protect = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let token: string | undefined;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];

        const decoded = jwt.verify(
          token,
          process.env.JWT_SECRET!
        ) as DecodedToken;

        next();
      } catch (error) {
        console.log(error);
        res.status(401).json("Not authorized");
      }
    }

    if (!token) {
      res.status(401).json("Not authorized, no token");
    }
  }
);

export { protect };
