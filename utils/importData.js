
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import Job from '../models/Job.js';
import connectDB from '../config/db.js';

dotenv.config();
connectDB();

const importJobs = async () => {
  try {
    const data = JSON.parse(fs.readFileSync('./data/jobs.json', 'utf-8'));
    await Job.deleteMany();
    await Job.insertMany(data);
    console.log(' Data Imported');
    process.exit();
  } catch (err) {
    console.error(' Error:', err);
    process.exit(1);
  }
};

importJobs();
