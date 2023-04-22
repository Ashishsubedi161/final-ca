export default function JobPost({job}){
    return (
        <article className="jobpost">
            <h4>{job.title}</h4>
            <p>{job.content}</p>
            <p>{job.price}</p>

            <button className="btn">Apply</button>
        </article>
    )
}