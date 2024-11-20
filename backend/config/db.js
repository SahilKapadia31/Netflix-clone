import mongoose from 'mongoose';
import { ENV_VARS } from './envVars.js';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(ENV_VARS.MONGO_URI)
        console.log("🚀 ~ connectDB ~ conn:", conn.connection.host)
    } catch (error) {
        console.log("🚀 ~ connectDB ~ error:", error.message);
        process.exit(1);
    }
}
