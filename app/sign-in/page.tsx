import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";


const SignIn = ({initialUser} : any) => {

    return (
        <div className="h-screen relative bg-primary-light bg-opacity-70">
            <div className="flex flex-col h-full w-full items-center ">
                <div className="bg-white h-[400px] px-24 my-6 shadow-xl py-6 flex flex-col  justify-center space-y-4">
                    <div className="text-primary font-semibold text-3xl space-y-4 max-w-sm">Welcome back</div>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="email" className="text-xs font-light">Email : </label>
                        <input id="email" type="email" className="w-full rounded-md border text-sm text-gray-700 outline-none p-2 border-primary" placeholder="Place your mail" />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="password" className="text-xs font-light">Password : </label>
                        <input id="password" type="password" className="w-full rounded-md border text-sm text-gray-700 outline-none p-2 border-primary" placeholder="Place your password" />
                    </div>
                    <div>Or</div>
                    <button className="text-primary p-2 rounded-md border border-primary">Sign In with google</button>
                    <div className="space-y-2">
                        <div className="text-xs font-light">Don't have an account? <span className="text-primary text-base">Sign Up</span></div>
                        <button className="bg-primary py-2 px-4 text-base border text-white rounded-md">Sign In</button>
                    </div>
                </div>
            </div>
            <Image src="/assets/Layer.svg" height={100} width={100} alt="Upwork logo" className="absolute left-72 top-16" />
            <Image src="/assets/Upwork.svg" height={100} width={100} alt="Upwork logo" className="absolute left-12 top-36" />
            <Image src="/assets/LinkedIn.svg" height={100} width={100} alt="Upwork logo" className="absolute left-72 top-60" />
            <Image src="/assets/Google.svg" height={100} width={100} alt="Upwork logo" className="absolute left-12 top-96" />
            <Image src="/assets/Meta.svg" height={100} width={100} alt="Upwork logo" className="absolute right-72 top-16" />
            <Image src="/assets/Amazon.svg" height={100} width={100} alt="Upwork logo" className="absolute right-12 top-36" />
            <Image src="/assets/Airbnb.svg" height={100} width={100} alt="Upwork logo" className="absolute right-72 top-64" />
            <Image src="/assets/Fiverr.svg" height={100} width={100} alt="Upwork logo" className="absolute right-12 top-96" />
        </div>
    )
}
export default SignIn;