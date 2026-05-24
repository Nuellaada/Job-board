import JobCard from './Jobcard';
import jobs from './jobs';

function JobList() {
  if (jobs.length === 0) {
    return <p style={{ color: '#888888' }}>No jobs available at the moment.</p>;
  }

  return (
    <div className="job-grid">
      {jobs.map(function(job) {
        return <JobCard key={job.id} job={job} />;
      })}
    </div>
  );
}

export default JobList;
