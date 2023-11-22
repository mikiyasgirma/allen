"use client"
import useJobStore from "@/app/store/useJobStore"

export default function Page({ params }: { params: { slug: string } }) {
    const {jobs} = useJobStore()

    const job = jobs.find((item) => item.id === params.slug)
    console.log("job", job);
    
    return (
        <div className="min-h-screen px-12">
            <div className="bg-primary-light rounded-md py-8 px-6 w-full">
                <div className="flex justify-between w-full">
                    <div>
                        <div className="text-2xl font-bold">{job?.title}</div>
                        <div className="text-xs">posted 3hrs ago</div>
                    </div>
                    <button className="bg-primary py-2 px-4 text-white rounded-lg">Apply Now</button>
                </div>
                <div className="py-2 text-lg font-semibold">{job?.recruiter}</div>
                <div className="text-xs max-w-xl">{job?.description}</div>
                <div className="flex space-x-2 py-2">
                {
                    job?.skills_required.map((key, index) => (
                            <div key={index} className="px-4 py-1 text-xs rounded-2xl bg-[#9CAE29] text-white">{key}</div>
                            ))
                        }
                </div>
            </div>
            <div className="py-6">
                <div className="text-2xl font-bold">Job Descripiton</div>
                <div className="text-xs">Posted 3hrs ago</div>
                <div className="py-2 text-lg font-semibold>Company XYZ">Company XYZ</div>
                <div className="flex justify-between py-4">
                    <p className="max-w-2xl text-sm font-light">
                    Lorem ipsum dolor sit amet consectetur. At integer sollicitudin pharetra mauris convallis nibh mi viverra. Justo lectus duis eget porttitor a sit et diam enim. Nulla nisl dolor velit mattis mauris suscipit condimentum. Purus dictumst tempus porttitor neque felis.
                    Lorem ipsum dolor sit amet consectetur. At integer sollicitudin pharetra mauris convallis nibh mi viverra. Justo lectus duis eget porttitor a sit et diam enim. Nulla nisl dolor velit mattis mauris suscipit condimentum. Purus dictumst tempus porttitor neque felis.
                    Lorem ipsum dolor sit amet consectetur. At integer sollicitudin pharetra mauris convallis nibh mi viverra. Justo lectus duis eget porttitor a sit et diam enim. Nulla nisl dolor velit mattis mauris suscipit condimentum. Purus dictumst tempus porttitor neque felis.
                    Lorem ipsum dolor sit amet consectetur. At integer sollicitudin pharetra mauris convallis nibh mi viverra. Justo lectus duis eget porttitor a sit et diam enim. Nulla nisl dolor velit mattis mauris suscipit condimentum. Purus dictumst tempus porttitor neque felis.
                    </p>
                    <div>
                        <div className="text-lg font-bold py-2">Tips</div>
                        <div className="space-y-4">
                            <p className="max-w-2xl text-sm font-light">
                                Lorem ipsum dolor sit amet consectetur. At integer sollicitudin pharetra mauris convallis nibh mi viverra. 
                                At integer sollicitudin pharetra mauris convallis nibh mi viverra. 
                            </p>
                            <p className="max-w-lg text-xs">
                            Justo lectus duis eget porttitor a sit et diam enim.
                                Nulla nisl dolor velit mattis mauris suscipit condimentum. Purus dictumst tempus porttitor neque felis.
                            </p>
                            <p className="max-w-lg text-xs">
                            Justo lectus duis eget porttitor a sit et diam enim.
                                Nulla nisl dolor velit mattis mauris suscipit condimentum. Purus dictumst tempus porttitor neque felis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}