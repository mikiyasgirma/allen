import { CiSearch } from "react-icons/ci";
import CourseCard from "../components/courseCard";
import TutorialsCard from "../components/tutorialsCard";

const Jobs = () => {
    return (
        <div className="min-h-screen px-12">
            <div className="flex items-center justify-center py-2">
                <div className="w-[450px] relative">
                    <input className="border-2 p-2 w-full border-primary rounded-2xl outline-none text-gray-700" placeholder="Search for any vacancy or tutorial" />
                    <div className="absolute right-2 top-2"><CiSearch size={27} /></div>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="space-y-3">
                    <div className="text-xl py-2">Latest Jobs</div>
                    <CourseCard />
                    <CourseCard />
                </div>
                <div>
                    <div className="text-xl py-2">Top tutorials</div>
                    <div className="">
                        <TutorialsCard />
                        <TutorialsCard />
                        <TutorialsCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Jobs;