import { getSession } from "@/lib/getSession";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { logout } from "@/action/logout";

const AuthNavBar = async () => {
  const session = await getSession();
  const user = session?.user;
  return (
    <div>
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
        <form action={logout}>
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
  );
};

export default AuthNavBar;
