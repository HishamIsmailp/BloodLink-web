"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Style from "../../styles/NavBar.module.css";
import Logo from "../../utils/images/Logo.png";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const getActivePage = (currentPath: string, targetPath: string) => {
    return currentPath === targetPath ? "4px solid #000" : "none";
  };

  return (
    <nav className="d-flex align-items-center justify-content-between w-100">
      <Link href={"/"} className="d-flex bg-white rounded-circle p-3">
        <Image src={Logo} alt="logo-img" className="justify-content-start" />
      </Link>
      <div className={Style.navItems}>
        <Link
          className={Style.navLinks}
          style={{ borderBottom: getActivePage(pathname, "/") }}
          href={"/"}
        >
          Home
        </Link>
        <Link
          className={Style.navLinks}
          style={{ borderBottom: getActivePage(pathname, "/aboutUs") }}
          href={"/aboutUs"}
        >
          About Us
        </Link>
        <Link
          className={Style.navLinks}
          style={{ borderBottom: getActivePage(pathname, "/findBlood") }}
          href={"/find-blood"}
        >
          Find Blood
        </Link>
          <button
            type="button"
            className={`${Style.navLinks} ${Style.navDropDown} border-0 dropdown-toggle`}
            style={{
              borderBottom:
                getActivePage(pathname, "/registerAsDonor") ||
                getActivePage(pathname, "/registerAsOrganization"),
            }}
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Register Now
          </button>
          <ul className={`dropdown-menu`}>
            <li>
              <Link className={`${Style.dropDownItem} dropdown-item`} href="/registerAsOrganization">
                Register As Organization
              </Link>
            </li>
            <li>
              <Link className={`${Style.dropDownItem} dropdown-item`} href="/regAsDoner">
                Register As Donor
              </Link>
            </li>
          </ul>
        <Link
          className={`${Style.navLinks} btn btn-outline-dark p-2 ps-5 pe-5`}
          href={"/logIn"}
        >
          Log In
        </Link>
      </div>
    </nav>
  );
}
