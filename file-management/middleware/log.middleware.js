import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

//handles es module __dirname and __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Middleware to log all requests
const logMiddleware = (req,res,next)=>{
    const log = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`;
    const logfile = path.join(__dirname,"../logs/request.logs");

    fs.appendFile(logfile,log,(err)=>{
        if(err) console.error("Failed to log request",err);
    });

    next();
}

export default logMiddleware