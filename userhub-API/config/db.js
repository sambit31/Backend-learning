import mongoose from "mongoose";

const connectDb = async()=>{
    try {
        const connect = await mongoose.connect("mongodb://localhost:27017/products")
        console.log(`Mongodb connected ${connect.connection.host}`)
    } catch (error) {
        console.log(`error`, error.message)
        process.exist(1)
    }
}

export default connectDb;