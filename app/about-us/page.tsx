import Image from "next/image"

const AboutUs = () => {
    return (
        <div className="">
            <div className='h-auto w-full px-52 flex flex-col items-center justify-center space-y-24'>
            <div className='text-primary text-6xl text-center w-full'>About Us</div>
            <div className='flex items-center space-x-12'>
              <p className='max-w-3xl text-lg'>Ethio Online is a legally registered company in Ethiopia established on 2016 Ethiopian Calander. The company will be headquartered in Addis Ababa, Ethiopia. The company will be owned and operated by a team of experienced professionals with a proven track record in the technology and business sectors.</p>
              <Image src='/assets/allen-logo-large.png' width={304} height={128} alt='Allen Logo large' />
            </div>
          </div>
        </div>
    )
}
export default AboutUs