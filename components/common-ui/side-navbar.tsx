import React from "react";
import Image from "next/image";
import LogoImage from "../../public/images/logo.png";
import Link from "next/link";
import {
  ClipboardList,
  House,
  LayoutList,
  LogOut,
  Settings,
  ShieldCheck,
  ShoppingBasket,
} from "lucide-react";

const SideNavigationBar = () => {
  return (
    <div className="p-2 min-h-screen">
      <div className="flex justify-center items-center">
        <Image src={LogoImage} alt={"logo image"} height={100} width={100} />
      </div>
      <div className="flex flex-col gap-5 pt-10">
        <Link
          className="flex flex-row p-2 gap-2 hover:bg-white hover:text-black hover:p-2"
          href={"/admin"}
        >
          <House /> <span>Dashboard</span>
        </Link>
        <Link
          className="flex flex-row p-2 gap-2 hover:bg-white hover:text-black hover:p-2"
          href={"/admin/products"}
        >
          <ShoppingBasket /> <span>Products</span>
        </Link>
        <Link
          className="flex flex-row p-2 gap-2 hover:bg-white hover:text-black hover:p-2"
          href={""}
        >
          <LayoutList /> <span>Categories</span>
        </Link>
        <Link
          className="flex flex-row p-2 gap-2 hover:bg-white hover:text-black hover:p-2"
          href={""}
        >
          <ClipboardList /> <span>Orders</span>
        </Link>
        <Link
          className="flex flex-row p-2 rounded-xl gap-2 hover:bg-white hover:text-black hover:p-2 "
          href={""}
        >
          <ShieldCheck /> <span>Admins</span>
        </Link>
        <Link
          className="flex flex-row p-2 gap-2 hover:bg-white hover:text-black hover:p-2"
          href={""}
        >
          <Settings /> <span>Settings</span>
        </Link>
        <Link
          className="flex flex-row p-2 gap-2 hover:bg-white hover:text-black hover:p-2"
          href={""}
        >
          <LogOut /> <span>Log Out</span>
        </Link>
      </div>
    </div>
  );
};

export default SideNavigationBar;
