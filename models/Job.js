import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  job_id: String, // added after renaming
  title: String,
  company: String,
  location: String,
  job_link: String,
  employment_type: String,
  experience: String,
  source: String,
  postedDateTime: Date,
  min_exp: Number,
  max_exp: Number,
  companyImageUrl: String,
  company_url: String,
  companytype: String,
  seniority_level: String,
  country: String
});

// ✅ Correct default export for ES module
const Job = mongoose.model('Job', jobSchema);
export default Job;
