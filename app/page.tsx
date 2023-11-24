"use client"
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'

export default function Home() {
  const session = useSession();
  return (
    <main>
      <div className='h-[580px] relative bg-primary w-full px-52'>
          <div className='absolute bg-white h-[450px] w-[900px] left-60 bottom-16 shadow-[10px_10px_0px_0px_rgba(64,78,79)] '>
            <div className='p-12 space-y-4'>
              <div className='text-primary text-7xl font-bold tracking-wider leading-tight max-w-2xl'>Do you want to get your dream job?</div>
              <button onClick={()=>signOut()} className='bg-primary text-white py-2 px-6'>Register</button>
              <div className='py-4 text-xs'>Already have an account? <span className='text-primary'>click here to login</span></div>
            </div>
          </div>
          <img className='absolute right-5 bottom-0' src='/assets/remote-work.svg'/>
      </div>
      <div className='h-[700px] w-full px-52 flex flex-col items-center justify-center space-y-24'>
        <div className='text-primary text-6xl text-center w-full'>Why you choose us?</div>
        <div className='flex justify-between w-full'>
          <div className='flex flex-col items-center space-y-4'>
            <Image src='/assets/translate.png' width={150} height={150} alt='translate-icon' />
            <div className='text-2xl'>In your local language</div>
          </div>
          <div className='flex flex-col items-center space-y-4'>
            <Image src='/assets/global-search.png' width={150} height={150} alt='translate-icon' />
            <div className='text-2xl'>Discover choice of platforms</div>
          </div>
          <div className='flex flex-col items-center space-y-4'>
            <Image src='/assets/video-square.png' width={150} height={150} alt='translate-icon' />
            <div className='text-2xl'>Outstanding guides</div>
          </div>
        </div>
      </div>
      <div className='h-[700px] w-full px-52 flex flex-col items-center justify-center space-y-24'>
        <div className='text-primary text-6xl text-center w-full'>About Us</div>
        <div className='flex items-center space-x-12'>
          <p className='max-w-3xl text-lg'>Ethio Online is a legally registered company in Ethiopia established on 2016 Ethiopian Calander. The company will be headquartered in Addis Ababa, Ethiopia. The company will be owned and operated by a team of experienced professionals with a proven track record in the technology and business sectors.</p>
          <Image src='/assets/allen-logo-large.png' width={304} height={128} alt='Allen Logo large' />
        </div>
      </div>
    </main>
  )
}
