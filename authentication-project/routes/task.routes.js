import express from "express";
import { addTask, fetchTasks } from "../controllers/task.controllers.js";
import { validateSession } from "../middlewares/session.middlewares.js";
const router = express.Router();


router.post("/",validateSession,addTask)
router.get("/",validateSession,fetchTasks)

export default router;