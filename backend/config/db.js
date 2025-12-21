import mongoose from "mongoose";

const connectDB = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully.".blue.bold);

    } catch (error) {
        console.error(`Error: ${error.message}.red.bold`);
    }
}

export default connectDB;