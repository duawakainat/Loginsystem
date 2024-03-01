"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const Form = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All field are necessar!");
      return;
    }
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.error) {
        setError("Invalude credentials");
        return;
      }
      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[30%]">
        <h1 className="text-[35px] font-bold font-mono">Login In</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Enter Email:</label> <br></br>
            <input
              name="email"
              id="email"
              placeholder="Enter Email"
              className="p-1 border-[2px] w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label>Enter Password:</label> <br></br>
            <input
              name="password"
              id="password"
              placeholder="Enter Password"
              className="p-1 border-[2px] w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="test-sm w-full bg-blue-700 text-white p-2 mb-3 cursor-pointer">
            Login
          </button>
          {error && (
            <p className="bg-red-700 w-full p-1 text-white text-lg mb-3 text-center">
              {error}
            </p>
          )}
          <p>
            Do not Have a account?{" "}
            <Link
              href="/registration"
              className="text-blue-700 underline decoration-blue-700 cursor-pointer"
            >
              Register here{" "}
            </Link>
          </p>
        </form>
        <button className="text-gray-500 shadow-lg underline border-[1px] border-gray-300 p-2 cursor-pointer"
        onClick={() => signIn("google")}>sign in with gooogle</button>
      </div>
      <div></div>
    </div>
  );
};
export default Form;
