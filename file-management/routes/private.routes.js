import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
const privateRoutes = express.Router();

privateRoutes.get("/dashboard",authMiddleware,(req,res)=>{
    res.status(200).send({
        message:`welcome to the dashboard ${req.user.name}`,
    })
})
privateRoutes.get("/",(req,res)=>{
    res.status(200).send({
        message:"welcome to the home page"
    })
}) 

export default privateRoutes;