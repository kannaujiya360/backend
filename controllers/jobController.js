import Job from '../models/Job.js';

export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getJobsByLocation = async (req, res) => {
  try {
    const { location } = req.query;
    const jobs = await Job.find({
      location: { $regex: location, $options: 'i' }
    });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
