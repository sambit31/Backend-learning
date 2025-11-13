import mongoose from "mongoose";

export function ConnectToDb(){
    mongoose.connect("mongodb://localhost:27017/notes")
    .then(() => {
        console.log("Connect to DB");
    });
}