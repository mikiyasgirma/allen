import { CiSearch } from "react-icons/ci";
import TutorialsCard from "../components/tutorialsCard";
import { MdFilterList } from "react-icons/md";

const Courses = () => {
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
                    <TutorialsCard />
                    <TutorialsCard />
                    <TutorialsCard />
                </div>
            </div>
        </div>
    )
}
export default Courses;