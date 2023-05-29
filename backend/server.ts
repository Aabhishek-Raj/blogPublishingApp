import 'dotenv/config'
import express, { json } from "express";
import rootRoutes from "./routes/root";
import userRoutes from "./routes/user";
import blogRoutes from './routes/blog'
import mongoose from 'mongoose';
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.use(json());
app.use(cors({ origin: "*" }));

app.use("/", rootRoutes);
app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);

mongoose.connect(process.env.MONGO_URI!)        
    .then(() => {
        console.log("Database Connected")
        app.listen(port, () => console.log(`Server started on port ${port}`));
    })
    .catch(console.error) 
