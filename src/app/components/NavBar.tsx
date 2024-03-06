'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Style from '../../styles/NavBar.module.css';
import Logo from '../../utils/images/Logo.png';
import { usePathname } from 'next/navigation';

export default function NavBar() {

    const pathname = usePathname();
    const getActivePage = (currentPath: string, targetPath: string) => {
        return currentPath === targetPath ? "4px solid #000" : "none";
      };

  return (
    <nav className='d-flex align-items-center justify-content-between w-100'>
        <Link href={"/"} className='d-flex bg-white rounded-circle p-3'>
            <Image src={Logo} alt='logo-img' className='justify-content-start' />
        </Link>
        <div className={Style.navItems}>
            <Link className={Style.navLinks} style={{ "borderBottom": getActivePage(pathname, "/") }} href={"/"}>Home</Link>
            <Link className={Style.navLinks} style={{ "borderBottom": getActivePage(pathname, "/about-us") }} href={"/about-us"}>About Us</Link>
            <Link className={Style.navLinks} style={{"borderBottom": getActivePage(pathname, "/find-blood")}} href={"/find-blood"}>Find Blood</Link>
            <Link className={Style.navLinks} style={{"borderBottom": getActivePage(pathname, "/register-now")}} href={"/register-now"}>Register Now</Link>
            <Link className={`${Style.navLinks} btn btn-outline-dark p-2 ps-5 pe-5`} href={"/login"}>Log In</Link>
        </div>
    </nav>
  )
}
