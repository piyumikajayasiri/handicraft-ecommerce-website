"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoImage from "../../public/images/logo.png";
import { usePathname } from "next/navigation";
import AuthNavBar from "./auth-navbar";

const AdminNavigationBar = () => {
  const pathname = usePathname();
  const shouldShowComponent = pathname !== "/login" && pathname !== "/register";
  if (!shouldShowComponent) return null;
  return (
    <div className="flex justify-between items-center px-5 text-lg font-semibold text-white bg-[#D2A738]">
      <div>
        <Image src={LogoImage} alt={"Logo Image"} height={100} width={100} />
      </div>
      <div className="flex flex-row gap-5">
        <Link
          className="hover:text-[#D2A738] hover:bg-white hover:px-2 hover:rounded-full"
          href=""
        >
          All Products
        </Link>
        <Link
          className="hover:text-[#D2A738] hover:bg-white hover:px-2 hover:rounded-full"
          href=""
        >
          Categories
        </Link>
        <Link
          className="hover:text-[#D2A738] hover:bg-white hover:px-2 hover:rounded-full"
          href=""
        >
          Account
        </Link>
        <Link
          className="hover:text-[#D2A738] hover:bg-white hover:px-2 hover:rounded-full"
          href=""
        >
          Blog
        </Link>
        <Link
          className="hover:text-[#D2A738] hover:bg-white hover:px-2 hover:rounded-full"
          href=""
        >
          Contact Us
        </Link>
      </div>
      <div className="flex flex-row gap-5">
        <AuthNavBar />
      </div>
    </div>
  );
};

export default AdminNavigationBar;
