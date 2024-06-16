import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectToDB from './connectDB/connectDB.js';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectToDB from './connectDB/connectDB.js';
import userRoute from './routes/userRoute.js';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB();

app.use('/', userRoute);

app.get('/', (req, res) => {
    res.send('Server is ready to serve...');
});


export default app;

