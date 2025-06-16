const { count } = require("console");
const EventEmitter= require("events");
const fs =require("fs");
const { json } = require("stream/consumers");

const emitter = new EventEmitter()//its an constructor so we have to use new keywords 

/*example----
//*on(eventName,Listener)----create
emitter.on("GREET",(args)=>{  //greet-eventname
    console.log(`hello world ${args.username} and ${args.id}`)
})

//emit(eventName, [arguments])---execute
emitter.emit("GREET",{//make obj for taking large number of data
    username:"suraj",
    id:"102400465"
})*/
const eventCounts = {
    login:0,
    logout:0,
    purchase:0,
    upadate:0
}

const logFile="eventlog.json"
if(fs.existsSync(logFile)){
    const data = fs.readFileSync(logFile,"utf8")
    Object.assign(eventCounts,JSON.parse(data))
}
function savecounts(){
    fs.writeFileSync(logFile, JSON.stringify(eventCounts,null,2))
}


    //LOGIN
    emitter.on("LOGIN", (args) => {
        console.log(`login success ${args.username}`)
        eventCounts.login++;
        savecounts()

    })
    emitter.emit("LOGIN", {
        username: "sambit",
        password: "11464465"

    })

    //LOGOUT
    emitter.on("LOGOUT", () => {
        console.log("logout success")
         eventCounts.logout++;
         savecounts()
    })
    emitter.emit("LOGOUT")

    emitter.on("PURCHASE", (args) => {
        console.log(`purchase item success ${args.items}`)
         eventCounts.purchase++;
         savecounts()
    })
    emitter.emit("PURCHASE", {
        items: "colgate",
    })

    emitter.on("PROFILE", (args) => {
        console.log(`profile updated ${args.username} and ${args.password}`)
         eventCounts.upadate++;
         savecounts()
    })
    emitter.emit("PROFILE", {
        usename: " ",
        password: " "
    })




