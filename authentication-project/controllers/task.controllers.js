

export const addTask = async(req,res)=>{
    const {title,description} =req.body;
    try {
        const task = await createTask(req.session.userId,title,description);
        res.status(201).json({
            success:true,
            message:"Task completed",
            data:task
        })
    } catch (error) {
        res.status(401).json({
            success:false,
            message:"Error created",
            error:error.message,
        })
    }
}


export const fetchTasks = async(req,res)=>{
    try {
        const tasks = await getTasks(req.session.userId);
        res.status(200).json(tasks)
    } catch (error) {
         res.status(401).json({
            success:false,
            message:"Error in task",
            error:error.message,
        })
    }
}