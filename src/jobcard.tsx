import { useState } from 'react';
import './Jobcard.css';

interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    salary: string;
}

interface Props {
    job: Job;
}

const icons: { [key: string]: string } = {
    "Civil Engineer": "🏗️",
    "Mechanical Engineer": "⚙️",
    "Electrical Engineer": "⚡",
    "Structural Engineer": "🏛️",
    "Geotechnical Engineer": "🪨",
    "Environmental Engineer": "🌿",
    "Project Engineer": "📋",
    "Highway Engineer": "🛣️",
    "Water Resources Engineer": "💧",
    "Site Engineer": "🦺",
};

function JobCard ({ job }: Props) {
    const [showDetails, setShowDetails] = useState(false);

   return (
    <div className="job-card">
      <div className="job-card-icon">
        {icons[job.title] || "💼"}
      </div>
      <p className="job-title">{job.title}</p>
      <p className="job-company">{job.company}</p>
      <div className="job-meta">
        <span className="job-badge">📍 {job.location}</span>
        <span className="job-badge">💼 Full-time</span>
      </div>
      <hr className="job-divider" />
      <p className="job-salary">{job.salary} / month</p>

      <button
        className="show-details-btn"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide details" : "Show details"}
      </button>

      {showDetails && (
        <p className="job-details">
          This is a full-time {job.title} role at {job.company}, based in {job.location}.
          The monthly salary is {job.salary}. Apply now to join a growing team of engineers.
        </p>
      )}
    </div>
  );

}

export default JobCard;