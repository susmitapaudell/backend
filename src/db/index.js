import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstant = await mongoose.connect(`${process.env.MONGOOSE_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected!! DB host : ${connectionInstant.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1)
    }
}

export default connectDB