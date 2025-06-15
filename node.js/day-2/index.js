const http = require("http")
const fs = require("fs")
const PORT=8080


const server = http.createServer((req,res)=>{
    const log = `${Date.now()}: & from ${req.url} NEW REQUEST RECEIVED`;
    fs.appendFile("./log.txt",log,(err)=>{
        if(err){
            console.error("error waiting",err);
            res.statusCode = 500;
            res.end("internal server error");
            return;
        }else{
            res.end("hello world from server")
        }
    })
})

server.listen(PORT,()=>{
    console.log(`server is connected at ${PORT}`)
})