
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const dataPath = path.join(__dirname, '../data/jobs.json');

const rawData = fs.readFileSync(dataPath, 'utf-8');
const jobs = JSON.parse(rawData);


const cleanedJobs = jobs.map(job => {
  
  if (job["Job ID (Numeric)"]) {
    job.job_id = job["Job ID (Numeric)"];
    delete job["Job ID (Numeric)"];
  }

  
  if (job.postedDateTime && job.postedDateTime.$date) {
    job.postedDateTime = job.postedDateTime.$date;
  }

  
  if (job.job_id && typeof job.job_id === 'object' && job.job_id.$numberLong) {
    job.job_id = job.job_id.$numberLong;
  }

  
  if (job.company_url && typeof job.company_url === 'object') {
    job.company_url = '';
  }

  
  if (job.companyImageUrl && typeof job.companyImageUrl === 'object') {
    job.companyImageUrl = '';
  }

  return job;
});


fs.writeFileSync(dataPath, JSON.stringify(cleanedJobs, null, 2), 'utf-8');
console.log('Cleaned job data saved to jobs.json');
