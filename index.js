import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectToDB from './connectDB.js';
import userRoute from './routes/userRoute.js';

dotenv.config();
const app = express();

// Enable CORS
app.use(cors({
    origin: 'https://portfolio-github-io-cyan.vercel.app/', // Replace with your frontend URL
    methods: ["GET", "PUT", "DELETE", "POST"],
    credentials: true,
}));

const PORT = process.env.PORT || 3000;

// Other middleware and routes setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', userRoute);

app.get('/', (req, res) => {
    res.send('Server is ready to serve...');
});

// Connect to MongoDB
connectToDB();

// Start server
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
