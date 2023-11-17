const CourseCard = () => {
    return (
        <div className="bg-primary-light rounded-md py-2 px-4 w-[712px]">
            <div className="flex justify-between w-full">
                <div>
                    <div className="text-xl font-bold">Java Developer</div>
                    <div className="text-xs">posted 3hrs ago</div>
                </div>
                <button className="bg-primary py-2 px-4 text-white rounded-lg">Apply Now</button>
            </div>
            <div className="py-2 text-base font-semibold">Company XYZ</div>
            <div className="text-xs">Lorem ipsum dolor sit amet consectetur. At integer sollicitudin pharetra mauris convallis nibh mi viverra. Justo lectus duis eget porttitor a sit et diam enim. Nulla nisl dolor velit mattis mauris suscipit condimentum. Purus dictumst tempus porttitor neque felis.</div>
            <div className="flex space-x-2 py-2">
                <div className="px-4 py-1 text-xs rounded-2xl bg-[#9CAE29] text-white">Backend</div>
                <div className="px-4 py-1 text-xs rounded-2xl bg-[#8E8E8E] text-white">Springboot</div>
            </div>
        </div>
    )
}
export default CourseCard