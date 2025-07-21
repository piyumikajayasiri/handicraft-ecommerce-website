import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="flex flex-row min-h-screen">
      {/* Left Panel - Form Section */}
      <div className="bg-gray-100 flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-6">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Explore the World of Handicraft Culture in Sri Lanka
          </h1>
          <p className="text-gray-600 text-center mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            lobortis maximus.
          </p>

          <form className="space-y-4">
            <div>
              <Label className="mb-2" htmlFor="firstname">
                First Name
              </Label>
              <Input
                name="firstname"
                type="text"
                id="firstname"
                placeholder="First Name"
              />
            </div>
            <div>
              <Label className="mb-2" htmlFor="lastname">
                Last Name
              </Label>
              <Input
                name="lastname"
                type="text"
                id="lastname"
                placeholder="Last Name"
              />
            </div>
            <div>
              <Label className="mb-2" htmlFor="email">
                Email Address
              </Label>
              <Input name="email" type="email" id="email" placeholder="Email" />
            </div>
            <div>
              <Label className="mb-2" htmlFor="password">
                Password
              </Label>
              <Input
                placeholder="Password"
                name="password"
                type="password"
                id="password"
              />
            </div>
            <div className="flex flex-col justify-center items-center ">
              <Button className="rounded-full font-normal w-[300px]">
                Sign up with email
              </Button>
              <p className="text-sm font-light">
                Already signed up? <Link href="/auth/login">Login</Link>
              </p>
            </div>
            <Separator />
            <div className="flex flex-col justify-center items-center ">
              <Button className="rounded-full bg-white text-black border border-black hover:bg-gray-100 hover:border hover:border-black font-normal w-[300px]">
                {" "}
                🌐 Continue with Google
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Panel - Image Section */}
      <div className="flex-1 bg-[url('https://img.freepik.com/free-vector/diy-creative-workshop-with-notebook_23-2148530305.jpg')] bg-cover bg-center" />
    </div>
  );
};

export default RegisterPage;
