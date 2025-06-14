const { error } = require("console")
const fs = require("fs")


//*write*
//fs.writeFileSync("./text.txt","hey world is syncing")//sync method
fs.writeFile("./type.txt","hey i am async code", (err)=>{
    console.log(err)
})

//*read*

//const res = fs.readFileSync("./text.txt","utf8")
//console.log(res)
fs.readFile("./text.txt","utf8",(err,res)=>{
    if(err){
        console.log(error)
    }else{
        console.log(res)
    }

})

//*update / append*
//fs.appendFileSync("./text.txt",new Date().toUTCString())
fs.appendFile("./log.txt",`hey this is suraj ${new Date().toDateString()}`,(err,res)=>{
    if(err){
        console.log(error)
    }else{
        console.log(res)
    }
})
//delete
fs.unlinkSync("./log.txt");

//2ways-sync(blocking code) and async(non blocking code)



//1.cpSync



// Copy file.txt to copied.txt
fs.cpSync('text.txt', 'copied.txt');
console.log('File copied!');

/*2.unlikSync
3.mkdirSync
4.statSync*/
