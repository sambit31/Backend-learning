import express from "express";
import { ConnectToDb } from "./src/db.js";

const app = express();
const PORT = 8080;

app.use(express.json())
ConnectToDb();

let notes = []

app.get("/",(req,res)=>{
    res.send("welcome");
})

app.get("/notes",(req,res)=>{
    const {title,content} = req.body
    console.log(title,content);
})

app.delete("/notes/:index",(req,res)=>{
    const index = req.params.index;
    delete notes[index]
    res.json({
        message:"note deleted successfully"
    })
})

app.post("/notes",(req,res)=>{
    console.log(req.body);  
    notes.push(req.body)
    res.json({
        message:"note created sucessfully"
    })
})


app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`);
})