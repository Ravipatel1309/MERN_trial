import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connection = async () => {
    try {
        const mongoURL = process.env.MONGO_URL;
        await mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("MongoDb Connected Successfully.");
    } catch (error) {
        console.log(`Error while connecting to MongoDB ${error}`);
    }
}

export default connection;
