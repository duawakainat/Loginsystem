import mongoose from "mongoose";
export const connectMongoDB= async()=>{
    try {
        await mongoose.connect(process.env.MONGDB_URL);
        console.log("connect to mongoDB");
    } catch (error) {
        console.log("Error connection mongoDB", error);
    }
}