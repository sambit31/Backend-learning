import express from "express";
import user from "../models/user.models.js"
const router = express.Router()

//CRUD operation
//1.create
router.post("/users",async(req,res)=>{
    try {
        // get the data from req body
        const {name,age,weight} = req.body;

        const newUser = new user({name,age,weight})
        await newUser.save();

        res.status(201).json({
            success:true,
            data:newUser,
            message:"new user created",
        }) 
        
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message, 
        })
    }
})

//2.read
router.get("/users",async(req,res)=>{
    try {
        const usersList = await user.find();

        res.status(200).json({
            success:true,
            data:usersList,
            message:"data accessed",
        })
    } catch (error) {
         res.status(500).json({
            success:false,
            message:error.message, 
        })
    }
})

//3.update
router.put("/update-user/:id",async(req,res)=>{
   const {id} = req.params;
   const {name,age,weight} = req.body;
    try {
        const updatedUser = await user.findByIdAndUpdate(id, {name,age,weight}, {new:true, runValidators:true});
        if(!updatedUser){
            return res.status(401).json({
                success:false,
                message:"user not found"
            })
        }

        res.json({
            success:true,
            user:updatedUser
        })

    } catch (error) {
          res.status(500).json({
            success:false,
            message:error.message, 
        })
    }
})

//4.delete
router.delete("/delete-user/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await user.findByIdAndDelete(id); 

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: deletedUser,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;