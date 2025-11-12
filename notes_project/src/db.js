import mongoose from "mongoose";

export function ConnectToDb(){
    mongoose.connect("mongodb://localhost:27017/")
    .then(()=>{
        console.log("connect to DB");
    });
}