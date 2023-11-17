const CourseDetail = () => {
    return (
        <div className="min-h-screen px-12">
            <div className="bg-primary-light rounded-md py-8 px-6 w-full">
                <div className="flex justify-between w-full">
                    <div>
                        <div className="text-2xl font-bold">Java Developer</div>
                        <div className="text-xs">posted 3hrs ago</div>
                    </div>
                    <button className="bg-primary py-2 px-4 text-white rounded-lg">Apply Now</button>
                </div>
                <div className="py-2 text-lg font-semibold">Company XYZ</div>
                <div className="text-xs max-w-xl">Lorem ipsum dolor sit amet consectetur. At integer sollicitudin pharetra mauris convallis nibh mi viverra. Justo lectus duis eget porttitor a sit et diam enim. Nulla nisl dolor velit mattis mauris suscipit condimentum. Purus dictumst tempus porttitor neque felis.</div>
                <div className="flex space-x-2 py-2">
                    <div className="px-4 py-1 text-xs rounded-2xl bg-[#9CAE29] text-white">Backend</div>
                    <div className="px-4 py-1 text-xs rounded-2xl bg-[#8E8E8E] text-white">Springboot</div>
                </div>
            </div>
            <div className="py-6">
                <div className="text-2xl font-bold">Job Descripiton</div>
                <div className="text-xs">Posted 3hrs ago</div>
                <div className="py-2 text-lg font-semibold>Company XYZ">Company XYZ</div>
                <div className="flex justify-between py-4">
                    <p className="max-w-lg text-xs">
                    Lorem ipsum dolor sit amet consectetur. At integer sollicitudin pharetra mauris convallis nibh mi viverra. Justo lectus duis eget porttitor a sit et diam enim. Nulla nisl dolor velit mattis mauris suscipit condimentum. Purus dictumst tempus porttitor neque felis.
                    Lorem ipsum dolor sit amet consectetur. At integer sollicitudin pharetra mauris convallis nibh mi viverra. Justo lectus duis eget porttitor a sit et diam enim. Nulla nisl dolor velit mattis mauris suscipit condimentum. Purus dictumst tempus porttitor neque felis.
                    Lorem ipsum dolor sit amet consectetur. At integer sollicitudin pharetra mauris convallis nibh mi viverra. Justo lectus duis eget porttitor a sit et diam enim. Nulla nisl dolor velit mattis mauris suscipit condimentum. Purus dictumst tempus porttitor neque felis.
                    Lorem ipsum dolor sit amet consectetur. At integer sollicitudin pharetra mauris convallis nibh mi viverra. Justo lectus duis eget porttitor a sit et diam enim. Nulla nisl dolor velit mattis mauris suscipit condimentum. Purus dictumst tempus porttitor neque felis.
                    </p>
                    <div>
                        <div className="text-lg font-bold py-2">Tips</div>
                        <div className="space-y-4">
                            <p className="max-w-lg text-xs">
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
export default CourseDetail;