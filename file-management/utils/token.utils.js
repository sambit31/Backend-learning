import crypto from "crypto";

export const generateToken = ()=>{
    return crypto.randomBytes(16).toString("hex")
}

export const validToken = (token)=>{
    return token.length ===32;
}