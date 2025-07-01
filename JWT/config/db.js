import mongoose from "mongoose";
export const connectDb = async()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongodb connected ${connect.connection.host}`)
    } catch (error) {
        console.log(`error`, error.message)
        process.exit(1) 
    }
}