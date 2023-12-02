"use client"

import CourseCard from "@/app/components/course-card";
import { db } from "@/app/firebase";
import { ICourses } from "@/app/jobs/page";
import useCourseStore, { Course } from "@/app/store/useCourseStore";
import useJobStore from "@/app/store/useJobStore";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function Page({ params }: { params: { slug: string } }) {


    const [course, setCourse] = useState<ICourses>()
    const [courses, setCourses] = useState<ICourses[]>();
    const coursesDbInstance = collection(db, 'courses')

    const getDocument = async () =>{
        if (!params.slug) {
            console.log("Slug is undefined");
            return;
        }
        const docRef = doc(db, "courses", params.slug);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()){
            setCourse(docSnap.data() as Course);
        } else {
            console.log("no such document")
        }
    }

    useEffect(()=>{
        getDocument();
    },[])
    console.log("vid", course?.video)

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
        <div className="px-12 min-h-screen">
            <div className="flex items-center justify-center">
                <ReactPlayer url= {course?.video} style={{border: 2}} />
            </div>
            <div>
                <div className="py-6 text-xl font-semibold">Related videos</div>
                <div className="text-lg py-2">{course?.title}</div>
                <div className="flex justify-between">
                {
                        courses?.map((course)=>(
                            <CourseCard thumbnail={course.thumbnail} title={course.title} description={course.description} video={course.video} id={course.id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}