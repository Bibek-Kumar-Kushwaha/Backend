import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet'
import connectToDB from './connectDB/connectDB.js';
import userRoute from './routes/userRoute.js';
import visitRoute from './routes/visitRoute.js';
dotenv.config();
const app = express();

// app.use(cors());
app.use(cors({
<<<<<<< HEAD
    origin: "https://www.bibekkumarkushwaha.com.np",
=======
    origin: [
        "https://www.bibekkumarkushwaha.com.np",
        "http://localhost:5173"
    ],
>>>>>>> master
    methods: ["GET", "PUT", "DELETE", "POST"],
    credentials: true, 
}));
app.use(helmet());
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoute);
app.use('/api', visitRoute);

app.get('/', (req, res) => {
    res.send('Server is ready to serve...');
});

connectToDB();

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
