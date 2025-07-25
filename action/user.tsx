"use server";

import connectDB from "@/lib/db";

import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
import { CredentialsSignin } from "next-auth";
import { signIn } from "@/auth";
import { User } from "@/model/user";

const login = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  if (!email || !password) {
    console.error("❌ Missing email or password");
    return;
  }
  try {
    await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      email,
      password,
    });
  } catch (error) {
    const someError = error as CredentialsSignin;
    return someError.cause;
  }
  redirect("/");
};

const register = async (formData: FormData) => {
  try {
    const firstname = formData.get("firstname")?.toString().trim();
    const lastname = formData.get("lastname")?.toString().trim();
    const email = formData.get("email")?.toString().toLowerCase().trim();
    const password = formData.get("password")?.toString();

    if (!firstname || !lastname || !email || !password) {
      throw new Error("Please fill in all fields.");
    }

    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("A user with this email already exists.");
    }
    // hash the password using bcryptjs
    const hashedPassword = await hash(password, 12);
    await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    console.log("✅ User registered successfully.");
    redirect("/login");
  } catch (error) {
    console.error("❌ Registration failed:", error);
    throw error;
  }
};

const fetchAllUsers = async () => {
  const users = await User.find({});
  return users;
};

export { register, login, fetchAllUsers };
