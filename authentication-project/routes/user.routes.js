import express from "express";
import { signup,login,logout } from "../controllers/user.controllers.js";

const router= express.Router();

//routes
router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);

export default router;