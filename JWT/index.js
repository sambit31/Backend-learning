import express from "express";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import privateRoutes from "./routes/private.routes.js"

dotenv.config();

const app =express();
const PORT=process.env.PORT || 5000;

app.use(express.json())

//connect mongodb
connectDb();

app.get("/",(req,res)=>{
    res.send("HELLO from server");
})

//routes
app.use("/auth",authRoutes);

app.use("/private",privateRoutes);

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})

//authentication routes (signup and login)
//PRIVATE ROUTES(JWT)
