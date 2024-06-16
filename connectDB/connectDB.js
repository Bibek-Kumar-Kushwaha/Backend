import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DBNAME = process.env.DBNAME;
const URI = process.env.URI;

const connectToDB = async () => {
    try {
        await mongoose.connect(URI, { dbName: DBNAME, useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Connection error:', error);
    }
};

export default connectToDB;
