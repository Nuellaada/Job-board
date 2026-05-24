import JobCard from './jobcard';
import jobs from './job';

function JobList () {
    if (jobs.length === 0) {
        return <p>No jobs available at the moment!</p>;
    }

    return (
        <div>
            {jobs.map(function(job) {
                return <JobCard key={job.id} job={job} />;
            })}
        </div>
    );
}

export default JobList;
