import express from "express";
import connectDb from "./config/db.js";
import userRoute from "./routes/user.routes.js" 




const app=express();
const PORT=8080;

app.use(express.json());//middleware(global)
connectDb();//connect to db

app.use("/api",userRoute);

app.get("/",(req,res)=>{
    res.send("welocome to server")
})

app.listen(PORT,()=>{
    console.log(`server start at port ${PORT}`);
})