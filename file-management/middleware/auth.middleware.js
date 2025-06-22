import { validToken } from "../utils/token.utils.js";

const authMiddleware = (req,res,next)=>{
    const token = req.headers['authorization'];

    if(token && validToken(token)){
        req.user = {name:"sambit", id:1}
        next()
    }else{
        res.status(200).send("unautharized: invalid or missing token")
    }
}

export default authMiddleware;