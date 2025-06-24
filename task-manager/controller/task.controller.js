import {readTasks , writeTasks} from "../utils/files.utils.js"

export const getAllTask = async(req , res)=>{
    if(!req.session.user){
        return res.status(401).json({message:"Unauthenticated"})
    }

    const tasks = await readTasks();
    res.json(tasks.filter((task)=>task.username === req.session.user.username))
}

export const createTask = async(req , res)=>{
    const {title , description} = req.body;
    const tasks = await readTasks();

    const newTask = {
        id:Date.now(),
        username:req.session.user.username,
        title,
        description,
        completed:false
    }

    tasks.push(newTask);
    await writeTasks(tasks);

    res.status(201).json(newTask)
}

export const updateTask = async (req, res) => {
    const { id } = req.params; // task ID from URL
    const { title, description, completed } = req.body;

    const tasks = await readTasks();

    const taskIndex = tasks.findIndex(
        (task) => task.id === parseInt(id) && task.username === req.session.user.username
    );

    if (taskIndex === -1) {
        return res.status(404).json({ message: "Task not found" });
    }

    if (title !== undefined) tasks[taskIndex].title = title;
    if (description !== undefined) tasks[taskIndex].description = description;
    if (completed !== undefined) tasks[taskIndex].completed = completed;

    await writeTasks(tasks);

    res.json({ message: "Task updated", task: tasks[taskIndex] });
};


export const deleteTask = async (req, res) => {
    const { id } = req.params;

    const tasks = await readTasks();

    const filteredTasks = tasks.filter(
        (task) => !(task.id === parseInt(id) && task.username === req.session.user.username)
    );

    if (tasks.length === filteredTasks.length) {
        return res.status(404).json({ message: "Task not found" });
    }

    await writeTasks(filteredTasks);

    res.json({ message: "Task deleted successfully" });
};
