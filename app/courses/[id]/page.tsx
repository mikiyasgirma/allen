"use client"

import CourseCard from "@/app/components/course-card";
import useCourseStore from "@/app/store/useCourseStore";
import useJobStore from "@/app/store/useJobStore";
import ReactPlayer from "react-player";

const Page = ({ params }: { params: { slug: string } }) => {

    const {courses} = useCourseStore()

    const course = courses.find((item) => item.id === params.slug)
    console.log("job", course);
    console.log("video link", course?.thumbnail)

    return (
        <div className="px-12 min-h-screen">
            <div className="flex items-center justify-center">
                <ReactPlayer url= {course?.video} />
            </div>
            <div>
                <div>Related videos</div>
                <div>{course?.title}</div>
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
export default Page;