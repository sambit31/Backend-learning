import { Router } from "express";

const userRouter = Router();


userRouter.get("/create-user",(req,res)=>{ //specific middleware
    res.status(200).send("Users page");
});

userRouter.get("/getAllUser",(req,res)=>{ //specific middleware
    res.status(200).send("get all users");
});
userRouter.get("/getUserById",(req,res)=>{ //specific middleware
    res.status(200).send("get User By Id");
});

export default userRouter;