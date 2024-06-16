import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectToDB from './connectDB/connectDB.js';
import userRoute from './routes/userRoute.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

// CORS configuration
app.use(cors({
    origin: process.env.FRONTENDED_URL, // Replace with your frontend URL
    methods: ["GET", "PUT", "DELETE", "POST"],
    credentials: true,
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.send('Server is ready to serve...');
});
app.use('/', userRoute);

// Connect to MongoDB
connectToDB();

// Start server
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});

export default app;
