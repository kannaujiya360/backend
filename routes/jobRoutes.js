import express from 'express';
import { getAllJobs, getJobsByLocation } from '../controllers/jobController.js';

const router = express.Router();


router.get('/test', (req, res) => {
  res.send('Job routes are working!');
});

router.get('/', getAllJobs); 
router.get('/search', getJobsByLocation); 

export default router;
