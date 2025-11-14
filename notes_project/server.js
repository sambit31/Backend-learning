import express from "express";
import { ConnectToDb } from "./src/db/db.js";
import { noteModel } from "./src/models/note.model.js";

const app = express();
const PORT = 8080;

app.use(express.json());

ConnectToDb();


app.get("/",(req,res)=>{
    res.send("welcome");
});

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


app.get("/notes",async (req, res)=>{
    try {
        const notes = await noteModel.find()

        res.json({
            message:"Notes fetch sucessfully",
            notes:notes,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating note" });
    }
})


app.delete("/notes/:id", async (req, res) => {
    try {
        const noteId = req.params.id;

        const deleteNote = await noteModel.findByIdAndDelete({_id:noteId});
        if(!deleteNote) return res.status(404).json({ message: "Note not found" });
 
        res.json({ message: "Note deleted successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating note" });
    }
});



app.patch("/notes/:id", async (req, res) => {
    try {
        const noteId = req.params.id;
        const { title, content } = req.body;
        const updatedNote = await noteModel.findOneAndUpdate(
            { _id: noteId },      // filter
            { title, content },   // updated fields
            { new: true }         // return updated note
        );

        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.json({
            message: "Note updated successfully",
            note: updatedNote
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating note" });
    }
});


app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`);
})