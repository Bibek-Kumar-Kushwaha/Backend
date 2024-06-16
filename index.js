import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectToDB from './connectDB/connectDB.js';
import userRoute from './routes/userRoute.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS with specific origin (your frontend URL)
app.use(cors({
    origin: 'https://portfolio-github-io-cyan.vercel.app',
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectToDB();

// Routes
app.use('/', userRoute);

// Example route to test server status
app.get('/', (req, res) => {
    res.send('Server is ready to serve...');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});

export default app;
