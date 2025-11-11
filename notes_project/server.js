import express from "express";

const app = express();
const PORT = 8080;

app.use(express.json())

let notes = []

app.post("/notes",(req,res)=>{
    console.log(req.body)
    notes.push(req.body)

    res.json({
        message: "Note added successfully",
        notes: notes
    })
})


app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`);
})