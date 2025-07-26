import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoImage from "../../public/images/logo.png";
import { Button } from "../ui/button";

import { getSession } from "@/lib/getSession";
import { signOut } from "@/auth";

const AdminNavigationBar = async () => {
  const session = await getSession();
  const user = session?.user;
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
      {user?.role === "admin" && (
        <Link
          className="hover:text-[#D2A738] hover:bg-white hover:px-2 hover:rounded-full"
          href="/admin"
        >
          Admin Panel
        </Link>
      )}
      <div className="flex flex-row gap-5">
        {!user ? (
          <div className="flex flex-row gap-5">
            <Link className="px-5 py-2 bg-[#C35F40]" href="/login">
              Log In
            </Link>
            <Link className="px-5 py-2 bg-[#C35F40]" href="/register">
              Sign In
            </Link>
          </div>
        ) : (
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button
              className="px-5 py-2 bg-[#C35F40]"
              type="submit"
              variant={"ghost"}
            >
              Logout
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminNavigationBar;
