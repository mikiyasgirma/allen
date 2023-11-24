import Image from "next/image"
import { ICourses } from "../jobs/page"
import Link from "next/link"

const CourseCard = ({thumbnail, title, description, video, id} : ICourses) => {
    
    return (
        <div className="flex space-x-4 items-center mt-2">
            <Image src={thumbnail} width={208} height={208} alt="video placeholder" />
            <div className="max-h-52">
                <div className="text-lg font-semibold max-w-xs">{title}</div>
                <div className="text-xs">20 minutes</div>
                <div className="text-xs font-light py-2 max-w-sm">This course contains 3hr of video which show the full path of finding remote jobs This course contains 3hr of video which show the full path of finding remote jobs</div>
                <Link href={`/courses/${id}`} >
                    <button className="text-white bg-primary rounded-md p-2 text-xs">Watch Now</button>
                </Link>
            </div>
        </div>
    )
}
export default CourseCard