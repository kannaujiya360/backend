// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import jobRoutes from './routes/jobRoutes.js';

dotenv.config();
connectDB();

const app = express();

// ✅ CORS Setup
const allowedOrigins = [
  'http://localhost:5173',
  'https://frontend-h6u1.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(express.json());

// Routes
app.use('/api/jobs', jobRoutes);

app.get('/', (req, res) => {
  res.send('🚀 Job Listing API Running...');
});

// Server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`🌐 Server running on http://localhost:${PORT}`);
});
