import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import collegeRoutes from './routes/collegeRoutes';
import reviewRoutes from './routes/reviewRoutes';
import favoriteRoutes from './routes/favoriteRoutes';

// Initial Configuration
dotenv.config();
connectDB(); // Connect to SQLite and sync models

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.get('/', (req, res) => res.send('API is running...'));
app.use('/api', collegeRoutes);
app.use('/api', reviewRoutes);
app.use('/api', favoriteRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));