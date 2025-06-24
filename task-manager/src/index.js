import express from 'express';
import session from "express-session";
import cookieParser from 'cookie-parser';

import authRoute from "../routes/auth.routes.js";
import taskrouter from '../routes/task.route.js';

const app= express();
const PORT=8080;

app.use(express.json());
app.use(session({
    secret:"sam",
    resave:false,
    saveUninitialized:false,
    cookie:{
        httpOnly:true,
        maxAge:1000*60*60*24,
        secure:false
    }
}))


app.get("/",(req,res)=>{
    res.send("welcome to task manager API");
});
app.use(cookieParser())

app.use("/auth",authRoute)
app.use("/task",taskrouter)

app.listen(PORT,()=>{
    console.log("server is running...")
})