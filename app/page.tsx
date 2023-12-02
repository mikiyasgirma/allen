"use client"
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react';
import { QuerySnapshot, collection, collectionGroup, doc, getDoc, getDocs, onSnapshot, query } from "firebase/firestore";
import { db } from './firebase';
import { Job } from './store/useJobStore';
import { Course } from './store/useCourseStore';
import { CiSearch } from "react-icons/ci";
import JobCard from './components/job-card';
import CourseCard from './components/course-card';

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

export default function Home() {
  const session = useSession();

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

  return (
    <main>
      {
        (session.status === "authenticated") ? (
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
        ) : (<main>
          <div className='h-[580px] relative bg-primary w-full px-52'>
              <div className='absolute bg-white h-[450px] w-[900px] left-60 bottom-16 shadow-[10px_10px_0px_0px_rgba(64,78,79)] '>
                <div className='p-12 space-y-4'>
                  <div className='text-primary text-7xl font-bold tracking-wider leading-tight max-w-2xl'>Do you want to get your dream job?</div>
                  <button onClick={()=>signOut()} className='bg-primary text-white py-2 px-6'>Register</button>
                  <div className='py-4 text-xs'>Already have an account? <span className='text-primary'>click here to login</span></div>
                </div>
              </div>
              <img className='absolute right-5 bottom-0' src='/assets/remote-work.svg'/>
          </div>
          <div className='h-[700px] w-full px-52 flex flex-col items-center justify-center space-y-24'>
            <div className='text-primary text-6xl text-center w-full'>Why you choose us?</div>
            <div className='flex justify-between w-full'>
              <div className='flex flex-col items-center space-y-4'>
                <Image src='/assets/translate.png' width={150} height={150} alt='translate-icon' />
                <div className='text-2xl'>In your local language</div>
              </div>
              <div className='flex flex-col items-center space-y-4'>
                <Image src='/assets/global-search.png' width={150} height={150} alt='translate-icon' />
                <div className='text-2xl'>Discover choice of platforms</div>
              </div>
              <div className='flex flex-col items-center space-y-4'>
                <Image src='/assets/video-square.png' width={150} height={150} alt='translate-icon' />
                <div className='text-2xl'>Outstanding guides</div>
              </div>
            </div>
          </div>
          <div className='h-[700px] w-full px-52 flex flex-col items-center justify-center space-y-24'>
            <div className='text-primary text-6xl text-center w-full'>About Us</div>
            <div className='flex items-center space-x-12'>
              <p className='max-w-3xl text-lg'>Ethio Online is a legally registered company in Ethiopia established on 2016 Ethiopian Calander. The company will be headquartered in Addis Ababa, Ethiopia. The company will be owned and operated by a team of experienced professionals with a proven track record in the technology and business sectors.</p>
              <Image src='/assets/allen-logo-large.png' width={304} height={128} alt='Allen Logo large' />
            </div>
          </div>
        </main>
    )
      }
    </main>
  )
}
