"use client"
import { CiSearch } from "react-icons/ci";
import CourseCard from "../components/course-card";
import { useEffect, useState } from "react";
import { QuerySnapshot, collection, collectionGroup, doc, getDoc, getDocs, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";
import JobCard from "../components/job-card";
import useJobStore, { Job } from "../store/useJobStore";
import useCourseStore, { Course } from "../store/useCourseStore";
import  { fetchJobData } from "../utilities/firestore";

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
    thumbnail: string;
    video: string;
}

const Jobs = () => {
    const [jobs, setJobs] = useState<IJobs[]>();
    const [courses, setCourses] = useState<ICourses[]>();

    const jobsDbInstance = collection(db, 'jobs');
    const coursesDbInstance = collection(db, 'courses')

    const getJobs = () => {
           getDocs(jobsDbInstance)
               .then((data) => {
                   setJobs(data.docs.map((item) => {
                       return { ...item.data(), id: item.id } as Job
                   }));
               })
       }

    useEffect(() => {
      getJobs();
    }, [])
    
    const getCourses = () => {
      getDocs(coursesDbInstance)
          .then((data) => {
              setCourses(data.docs.map((item) => {
                  return { ...item.data(), id: item.id } as Course
              }));
          })
    }

    useEffect(() => {
      getCourses();
    }, [])
    
    // useEffect(() => {
    //     // Fetch data only if it hasn't been fetched yet
    //     if (!dataFetched) {
    //       const fetchJobs = async () => {
    //         const q = query(collection(db, 'jobs'));
    //         const unSubscribe = onSnapshot(q, (querySnapshot) => {
    //           querySnapshot.forEach((doc) => {
    //             const jobData = { id: doc.id, ...doc.data() } as Job;
    //             addJob(jobData);
    //           });
    //         });
    
    //         setDataFetched(true); // Set dataFetched to true after fetching data
    
    //         return () => unSubscribe(); // Cleanup function to unsubscribe from the snapshot listener
    //       };
    
    //       fetchJobs();
    //     }
    //   }, [dataFetched, setDataFetched]);

    //   useEffect(() => {
    //     // Fetch data only if it hasn't been fetched yet
    //     if (!courseDataFetched) {
    //       const fetchCourses = async () => {
    //         const q = query(collection(db, 'courses'));
    //         const unSubscribe = onSnapshot(q, (querySnapshot) => {
    //           querySnapshot.forEach((doc) => {
    //             const courseData = { id: doc.id, ...doc.data() } as Course;
    //             addCourse(courseData);
    //           });
    //         });
    
    //         setDataFetched(true); // Set dataFetched to true after fetching data
    
    //         return () => unSubscribe(); // Cleanup function to unsubscribe from the snapshot listener
    //       };
    
    //       fetchCourses();
    //     }
    //   }, [dataFetched, setDataFetched]);

    return (
        <div className="min-h-screen px-12">
        <div className="flex items-center justify-center py-2">
            <div className="w-[450px] relative">
                <input className="border-2 p-2 w-full border-primary rounded-2xl outline-none text-gray-700" placeholder="Search for any vacancy or tutorial" />
                <div className="absolute right-2 top-2"><CiSearch size={27} /></div>
            </div>
        </div>
        <div className="flex justify-between py-6">
            <div className="space-y-3">
                <div className="text-xl py-2">Latest Jobs</div>
                {
                    jobs?.map((job:any)=> (
                        <JobCard id={job.id} title={job.title} description={job.description} recruiter={job.recruiter} skills_required={job.skills_required} />
                    ))
                }
            </div>
            <div>
                <div className="text-xl py-2">Top tutorials</div>
                <div className="">
                    {
                        courses?.map((course)=>(
                            <CourseCard thumbnail={course.thumbnail} title={course.title} description={course.description} video={course.video} id={course.id} />
                            ))
                    }
                </div>
            </div>
        </div>
    </div>
    );
};

export default Jobs;