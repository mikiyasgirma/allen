import Link from "next/link"
import { IJobs } from "../jobs/page"
import useJobStore from "../store/useJobStore"

const JobCard  = ({title, description, recruiter, skills_required, id} : IJobs) => {
   const {jobs} = useJobStore();
    
    console.log("jobs", jobs);

    return (
        <div className="bg-primary-light rounded-md py-2 px-4 w-[712px]">
            <div className="flex justify-between w-full">
                <div>
                    <div className="text-xl font-bold">{title}</div>
                    <div className="text-xs">posted 3hrs ago</div>
                </div>
                <Link href={`/jobs/${id}`}>
                    <button className="bg-primary py-2 px-4 text-white rounded-lg">Apply Now</button>
                </Link>
            </div>
            <div className="py-2 text-base font-semibold">{recruiter}</div>
            <div className="text-xs">{description}</div>
            <div className="flex space-x-2 py-2">
                {
                    skills_required.map((job : any, index : any)=>(
                            <div key={index} className="px-4 py-1 text-xs rounded-2xl bg-[#9CAE29] text-white">{job}</div>
                            ))
                        }
            </div> 
        </div>
    )
}
export default JobCard