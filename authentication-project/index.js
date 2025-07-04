import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import session  from "express-session";

import userRoutes from "./routes/user.routes.js"
import taskRoutes from "./routes/task.routes.js"

dotenv.config();
const app = express();

app.use(express.json());

//session config
app.use(
    session({
        secret:process.env.SESSION_SECRET,
        resave:false,
        saveUninitialized:true,
        cookie:{maxAge:6000000}//10min
    })
)

const PORT = process.env.PORT || 5000
//routes
app.get("/",(req,res)=>{
    res.send("welcome")
})
app.use("/api/users",userRoutes);
app.use("/api/task",taskRoutes);

connectDb();

app.listen(PORT,()=>{
    console.log(`server starts at ${PORT}`);
})