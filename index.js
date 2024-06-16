import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectToDB from './connectDB/connectDB.js';
import userRoute from './routes/userRoute.js';

dotenv.config();
const app = express();

//app.use(cors());
app.use(cors({
    origin: process.env.FRONTENDED_URL, // Allow requests from your React frontend
    methods: ["GET", "PUT", "DELETE", "POST"],
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/', userRoute);

app.get('/', (req, res) => {
    res.send('Server is ready to serve...');
});

connectToDB();
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
