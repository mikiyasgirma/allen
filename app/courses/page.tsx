"use client"

import { CiSearch } from "react-icons/ci";
import { MdFilterList } from "react-icons/md";
import CourseCard from "../components/course-card";
import useCourseStore, { Course } from "../store/useCourseStore";
import useJobStore from "../store/useJobStore";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
  
  export interface ICourses {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    video: string;
  }

const Courses = () => {

    const [courses, setCourses] = useState<ICourses[]>();
    const coursesDbInstance = collection(db, 'courses')
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
                    <div className="text-lg font-semibold py-4">Top tutorials</div>
                    <div className="flex flex-col space-y-4">
                        {
                            courses?.map((course)=>(
                                <CourseCard key={course.id} id={course.id} title={course.title} description={course.description} thumbnail={course.thumbnail} video={course.video} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Courses;