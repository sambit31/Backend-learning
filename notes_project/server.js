import express from "express";
import { ConnectToDb } from "./src/db/db.js";
import { noteModel } from "./src/models/note.model.js";

const app = express();
const PORT = 8080;

app.use(express.json())
ConnectToDb();

let notes = []

app.get("/",(req,res)=>{
    res.send("welcome");
})

app.post("/notes",async (req, res) => {
    try {
        const { title, content } = req.body;

        const newNote = await noteModel.create({ title, content });
        res.status(201).json({
            message: "Note created successfully",
            note: newNote,
        });
    } catch (error){
        console.error(error);
        res.status(500).json({ message: "Error creating note" });
    }
});


app.get("/notes",async (res, req)=>{
    try {
        const notes = await noteModel.find()

        req.json({
            message:"Notes fetch sucessfully",
            notes
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating note" });
    }
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