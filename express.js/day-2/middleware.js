//1.global middleware(done)
//2.specific routes middleware(done)
//3.inbuild

import express from "express";

const app = express();

function SayHiMiddleware(req,res,next){//middleware
    console.log("HI I AM MIDDLEWARE");
    next();
}

app.use(SayHiMiddleware);//use:: for middleware

const PORT=8080;

//1)GET Request(it is for fetching data from server)

app.get("/",SayHiMiddleware, (req,res)=>{ //specific middleware
    res.status(200).send("HELLO WORLD2")
})

app.listen(PORT,(req,res)=>{
    console.log(`server is running on port ${PORT}`)
})

