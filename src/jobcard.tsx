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

function JobCard ({ job }: Props) {
    return (
        <div>
            <h2>{job.title}</h2>
            <p>Company: {job.company}</p>
            <p>Location: {job.location}</p>
            <p>Salary: {job.salary}</p>
        </div>
    );
}

export default JobCard;