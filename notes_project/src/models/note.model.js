import mongoose from "mongoose";

export const noteSchema = new mongoose.Schema({
    title: String,
    content: String,
})

export const noteModel = mongoose.model("note",noteSchema);