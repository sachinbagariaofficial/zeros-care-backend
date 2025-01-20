import mongoose from "mongoose";



async function connectDB() {
    const dbURL = process.env.DB_CONNECTION_URL;


    if (!dbURL) {
        throw new Error("Database connection URL is missing in environment variables.");
    }

    await mongoose.connect(dbURL);

}

export default connectDB;
