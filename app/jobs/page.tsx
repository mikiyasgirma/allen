"use client"

import { CiSearch } from "react-icons/ci";
import { MdFilterList } from "react-icons/md";
import CourseCard from "../components/course-card";
import useCourseStore, { Course } from "../store/useCourseStore";
import useJobStore, { Job } from "../store/useJobStore";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import JobCard from "../components/job-card";

export interface IJobs {
    id: string;
    title: string;
    description: string;
    recruiter: string;
    skills_required: string[];
}
export interface ICourses {
    id: string;
    title: string;
    description: string;
    video: string;
    thumbnail: string;
}
  
const Jobs = () => {

    const [jobs, setJobs] = useState<IJobs[]>();
    const coursesDbInstance = collection(db, 'jobs')
    const getJobs = () => {
        getDocs(coursesDbInstance)
            .then((data) => {
                setJobs(data.docs.map((item) => {
                    return { ...item.data(), id: item.id } as Job
                }));
            })
      }
    
      useEffect(() => {
        getJobs();
      }, [])

    return (
        <div className="min-h-screen px-12">
            <div className="flex items-center justify-center py-2">
                <div className="w-[450px] relative">
                    <input className="border-2 p-2 w-full border-primary rounded-2xl outline-none text-gray-700" placeholder="Search for any vacancy or tutorial" />
                    <div className="absolute right-2 top-2"><CiSearch size={27} /></div>
                </div>
            </div>
            <div className="flex flex-row py-6 space-x-12">
                <div className="basis-1/6 flex justify-between w-full">
                    <div className="text-lg">
                        <div className="py-4 text-lg font-semibold">Filters</div>
                        <div className="space-y-2 text-sm">
                            <div>Category</div>
                            <div>Date</div>
                            <div>Duration</div>
                        </div>
                    </div>
                    <div className="py-4"><MdFilterList size={28} /></div>
                </div>
                <div className="basis-5/6">
                    <div className="text-lg font-semibold py-4">Top Jobs</div>
                    <div className="flex flex-col space-y-4">
                        {
                            jobs?.map((job)=>(
                                <JobCard id={job.id} title={job.title} description={job.description} recruiter={job.recruiter} skills_required={job.skills_required} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Jobs;