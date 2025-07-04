import bcrypt from "bcrypt";
import {User} from "../models/user.models.js"

export const registerUser = async(username,password)=>{
    const hashedPassword = await bcrypt.hash(password,20);
    const user = new User({username,password:hashedPassword});
    return await user.save()
}

export const loginUser = async(username,password)=>{
    const user = await User.findOne({username});  
    if(!user || !await bcrypt.compare(password,user.password)){
        throw new Error("Invalid Username or Password")
    }
    return user;  
}


