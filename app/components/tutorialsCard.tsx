import Image from "next/image"

const TutorialsCard = () => {
    return (
        <div className="flex h-32 items-center">
            <Image src='/assets/video-player.jpg' width={140} height={160} alt="video placeholder" />
            <div className="space-y-2">
                <div className="text-lg font-semibold max-w-xs">How to build effective resume</div>
                <div className="text-xs">20 minutes</div>
                <button className="text-white bg-primary rounded-md p-2 text-xs">Watch Now</button>
            </div>
        </div>
    )
}
export default TutorialsCard