import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { createTask, deleteTask, getAllTask, updateTask } from "../controller/task.controller.js";

const taskrouter = Router();

taskrouter.get("/" , authMiddleware , getAllTask);
taskrouter.post("/" , authMiddleware , createTask);
taskrouter.put("/:id" , authMiddleware , updateTask);
taskrouter.delete("/:id" , authMiddleware , deleteTask);

export default taskrouter;