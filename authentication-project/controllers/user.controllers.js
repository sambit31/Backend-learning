import { registerUser,loginUser } from "../services/user.services.js";

export const signup = async(req,res)=>{
    const {username,password}=req.body;
    try {
        const user = await registerUser(username,password);
        res.status(201).json({
            status:true,
            message:"user registerted sucessful",
            data:user
        })
    } catch (error) {
        res.status(500).json({
            message:"error signing-up",
            error:error.message,
        })
    }
}

export const login = async(req,res)=>{
    const {username,password}=req.body;
    try {
        const User = await loginUser(username,password);

        //save user in session
        req.session.userId = User._id;
        res.status(200).json({
            success:true,
            message:"Login Successful",
        })
    } catch (error) {
         res.status(500).json({
            message:"error signing-up",
            error:error.message,
        })
    }
}

    export const logout = async (req, res) => {
    try {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Error while logging out",
                    error: err.message,
                });
            }
            res.status(200).json({
                success: true,
                message: "Logged out successfully"
            });
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Logout failed",
            error: error.message,
        });
    }
};
    


    