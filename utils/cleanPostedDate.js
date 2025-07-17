import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawPath = path.join(__dirname, '../data/jobs.json');
const rawData = fs.readFileSync(rawPath, 'utf-8');
const jobs = JSON.parse(rawData);

const cleanedJobs = jobs.map(job => {
  
  if (job.postedDateTime && job.postedDateTime.$date) {
    job.postedDateTime = job.postedDateTime.$date;
  }

  
  if (job.job_id && job.job_id.$numberLong) {
    job.job_id = job.job_id.$numberLong;
  }

  return job;
});

fs.writeFileSync(rawPath, JSON.stringify(cleanedJobs, null, 2), 'utf-8');
console.log('Cleaned postedDateTime and job_id fields');
