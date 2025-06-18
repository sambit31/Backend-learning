import express from "express";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use("/api/v1/users",userRouter)

app.get("/",(req,res)=>{ //specific middleware
    res.status(200).send("HELLO WORLD");
});

app.listen(PORT,(req,res)=>{
    console.log(`server is running on port ${PORT}`)
})

