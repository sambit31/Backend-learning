import express from "express";
import {data} from "./data/data.js";

const app = express();
app.use(express.json());

const PORT=8080;


//1)GET Request(it is for fetching data from server)

app.get("/", (req,res)=>{
    res.status(200).send("HELLO WORLD")
})

//::::-----industry standereds-----::::
app.get("/api/v1/users",(req,res)=>{
    const {name}= req.query;
   // console.log(req.query);
    res.status(200).send(data);

    if(name){
        const user = userdata.filter((user)=>{
            return user.name === name;
        })
        res.status(200).send(user)
    }
})

//::::router params::::
app.get("/api/v1/users/:id",(req,res)=>{
    const {id} = req.params;
    const parseId = parseInt(id);

    const user = data.find((user)=>user.id === parseId);
    res.status(200).send(user)
})


//2)POST request (it is for sending data to server)
app.post("/api/v1/users",(req,res)=>{
    //console.log(req.body);
    const{name,displayname} = req.body;
    const newUser={
        id:data.length +1,
        name,
        displayname
    }

    data.push(newUser)
    res.status(201).send({
        message:"user created",
        data:newUser
    })
})

//3)PUT REQUEST(UPDATE ALL FIELDS)

app.put("/api/v1/user/:id",(req,res)=>{
    const {
        body,
        params:{id},
    } = req;
    const parseId = parseInt(id);
    const userindex = data.findIndex((user)=>user.id===parseId);

    if(userindex===-1){
        res.status(404).send("user not found");
    }
    data[userindex]={
        id:parseId,
        ...body
    }
    res.status(200).send({message:"user updated",
        data:data[userindex]
    });
});
// 4) PATCH REQUEST (UPDATE SPECIFIC FIELDS)

app.patch("/api/v1/users/:id", (req, res) => {
    const { id } = req.params;
    const parseId = parseInt(id);
    const userIndex = data.findIndex((user) => user.id === parseId);

    if (userIndex === -1) {
        return res.status(404).send({ message: "User not found" });
    }

    // Only update the fields sent in req.body
    data[userIndex] = {
        ...data[userIndex],
        ...body,
    };

    res.status(200).send({
        message: "User updated (partial)",
        data: data[userIndex],
    });
});

// 5) DELETE REQUEST (REMOVE A USER)
app.delete("/api/v1/users/:id", (req, res) => {
    const { id } = req.params;
    const parseId = parseInt(id);

    const userIndex = data.findIndex((user) => user.id === parseId);

    if (userIndex === -1) {
        return res.status(404).send({ message: "User not found" });
    }

    const deletedUser = data.splice(userIndex, 1); // Removes 1 item at index
    res.status(200).send({
        message: "User deleted successfully",
        data: deletedUser[0],
    });
});

app.listen(PORT,(req,res)=>{
    console.log(`server is running on port ${PORT}`)
})


