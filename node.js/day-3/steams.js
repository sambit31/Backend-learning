const http =require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{
    //?-------------1----------------------
    /*//1.downloading files in a bad ways
    const file=fs.readFileSync("sample.txt")
    res.end(file);*/

    //2.corrrect way(strem)
   /* const readableStream = fs.createReadStream("sample.txt")
    readableStream.pipe(res)*/


    //?------------2-----------------------
    //const file = fs.readFileSync("sample.txt")
    //fs.writeFileSync("output.txt",file)

    const readsteam =fs.createReadStream("sample.txt")
    const writestream =fs.createWriteStream("output.txt")

    readsteam.on("data",(chunk)=>{
        console.log("chunk:",chunk);
        writestream.write(chunk);
    })
});


server.listen(8080,()=>{
    console.log("server is connected at",8080)
})

//2types:readble and writeable stream
//req:readableStream
//res:writeableStream
//remember:  readable<------pipe----->writeable 