const {Readable, Writable} = require("stream");

const readableStream = new  Readable({//obj
    highWaterMark:6,//limit of chunks
    read(){}
})

const writeableStream=new Writable({
    write(streamData){
        console.log("writing",streamData.toString())
    }
})

readableStream.on("data",(chunk)=>{
    console.log("chunk:",chunk)
    writeableStream.write(chunk)
});

readableStream.push("HELLO")


