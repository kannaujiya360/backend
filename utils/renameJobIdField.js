
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const rawData = fs.readFileSync(path.join(__dirname, '../data/jobs.json'), 'utf-8');
const jobs = JSON.parse(rawData);


const updatedJobs = jobs.map(job => {
  if (job["Job ID (Numeric)"]) {
    job.job_id = job["Job ID (Numeric)"];
    delete job["Job ID (Numeric)"];
  }
  return job;
});


fs.writeFileSync(path.join(__dirname, '../data/jobs.json'), JSON.stringify(updatedJobs, null, 2), 'utf-8');
console.log('Field "Job ID (Numeric)" renamed to "job_id"');
