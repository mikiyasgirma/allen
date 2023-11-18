import Image from "next/image";

const SignUp = () => {
    return (
        <div className="h-auto relative bg-primary-light bg-opacity-70">
            <div className="flex flex-col h-full w-full items-center justify-center">
                <div className="bg-white px-24 my-6 shadow-xl py-6 flex flex-col  justify-center space-y-4">
                    <div className="text-primary font-semibold text-3xl space-y-4 max-w-sm">Get one step closer</div>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="firstName" className="text-xs font-light">First name : </label>
                        <input id="firstName" className="w-full rounded-md border text-sm text-gray-700 outline-none p-2 border-primary" placeholder="Place your first name please" />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="lastName" className="text-xs font-light">Last name : </label>
                        <input id="lastName" className="w-full rounded-md border text-sm text-gray-700 outline-none p-2 border-primary" placeholder="Place your last name please" />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="email" className="text-xs font-light">Email : </label>
                        <input id="email" type="email" className="w-full rounded-md border text-sm text-gray-700 outline-none p-2 border-primary" placeholder="Place your mail" />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="password" className="text-xs font-light">Password : </label>
                        <input id="password" type="password" className="w-full rounded-md border text-sm text-gray-700 outline-none p-2 border-primary" placeholder="Place your password" />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="confirm_password" className="text-xs font-light">Confirm password : </label>
                        <input id="confirm_password" type="password" className="w-full rounded-md border text-sm text-gray-700 outline-none p-2 border-primary" placeholder="rewrite the password above" />
                    </div>
                    <div className="space-y-2">
                        <div className="text-xs font-light">Already have an account? <span className="text-primary font-semibold text-base">Login</span></div>
                        <button className="bg-primary py-2 px-4 text-base border text-white rounded-md">Sign Up</button>
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
export default SignUp;