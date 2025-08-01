import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

export const User = mongoose.model("user",userschema)