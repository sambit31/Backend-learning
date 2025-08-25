import Client from "./client.js";

async function init(){
    const result = await Client.get("msg:1");

    await Client.set("msg:6", "Hello World");
    const msg = await Client.get("msg:6");
    console.log("result:", result);
    console.log("Message:", msg);

}

init();


//How we can scale websockets servers using pub-sub model(architecture)
//