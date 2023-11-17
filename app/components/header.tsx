"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const Header: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [activeLink, setActiveLink] = useState<string>('');

    useEffect(() => {
        // Set the active link based on the current route
        setActiveLink(pathname);
    }, [pathname]);

    const getLinkStyle = (path: string): string => {
        // Add your desired styles for the active link
        return activeLink === path ? 'text-primary font-bold' : 'text-black';
    };

    return (
        <div className="bg-[#ffffff] text-black flex py-6 justify-between px-12 items-center">
            <Image src="/assets/allen_logo.png" height={67} width={158} alt="Allen Logo" />
            <div className="flex space-x-8 items-center">
                <Link href="/" passHref>
                    <a className={getLinkStyle('/')}>Home</a>
                </Link>
                <Link href="/tutorials" passHref>
                    <a className={getLinkStyle('/tutorials')}>Tutorials</a>
                </Link>
                <Link href="/about-us" passHref>
                    <a className={getLinkStyle('/about-us')}>About Us</a>
                </Link>
                <Link href="/contact-us" passHref>
                    <a className={getLinkStyle('/contact-us')}>Contact Us</a>
                </Link>
                <button className="bg-primary text-white px-6 py-1 rounded-md">Join Us</button>
                <button className="text-primary px-6 py-1 rounded-md border-primary border-2">Sign In</button>
            </div>
        </div>
    );
};

export default Header;