"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react'
import { signIn } from "next-auth/react";

const Header: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [activeLink, setActiveLink] = useState<string | null>('');
    const session = useSession();
    console.log("session", session);

    useEffect(() => {
        // Set the active link based on the current route
        setActiveLink(pathname);
    }, [pathname]);

    const getLinkStyle = (path: string): string => {
        // Add your desired styles for the active link
        return activeLink === path ? 'text-primary underline underline-offset-8 font-bold' : 'text-black';
    };

    return (
        <div className="bg-[#ffffff] text-black flex py-6 justify-between px-12 items-center">
            <Image src="/assets/allen_logo.png" height={67} width={158} alt="Allen Logo" />
            <div className="flex space-x-8 items-center">
                <Link href="/" passHref className={getLinkStyle('/')}>
                    Home
                </Link>
                {
                    session.status === "authenticated" && <Link href="/jobs" passHref className={getLinkStyle('/jobs')}>
                    Jobs
                </Link>
                }
                {
                    session.status === "authenticated" && <Link href="/courses" passHref className={getLinkStyle('/courses')}>
                    Courses
                </Link>
                }
                <Link href="/about-us" passHref className={getLinkStyle('/about-us')}>
                    About Us
                </Link>
                <Link href="/contact-us" passHref className={getLinkStyle('/contact-us')}>
                    Contact Us
                </Link>
                {
                    session.status === "authenticated" ? (
                        <div>
                            <button onClick={() => signOut()} className="bg-primary text-white px-6 py-1 rounded-md">Sign Out</button>
                        </div>
                    ) : (
                        <div className='space-x-3'>
                            <button className="bg-primary text-white px-6 py-1 rounded-md">Join Us</button>
                            <button onClick={()=>signIn('google', {callbackUrl: '/'})} className="text-primary px-6 py-1 rounded-md border-primary border-2">Sign In</button>
                        </div>
                    )
                }
                
            </div>
        </div>
    );
};

export default Header;