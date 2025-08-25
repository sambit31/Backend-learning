import http from 'http';
import WebSocket, { WebSocketServer } from 'ws';

const server = http.createServer((req, res) => {
    console.log((new Date()) + "Received req for" + req.url);
    res.end("Hi there")
});

const wss = new WebSocketServer({server});//step1
wss.on("connection", function connection(ws){//step2
    ws.on("error",console.error);

    ws.on("message", function messsage(data , isbinary){
        wss.clients.forEach(function each(client){
            if(client.readyState === WebSocket.OPEN){
                client.send(data , {binary:isbinary})
            }
        })
    });

    ws.send("Hello! connection message form ws server")
});


server.listen(8080,()=>{
    console.log((new Date())+"server is listening on port" + 8080);
})