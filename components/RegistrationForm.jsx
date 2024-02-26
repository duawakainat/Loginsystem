"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("All field are necessar!");
      return;
    }
    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const { user } = await resUserExists.json();

      if (user) {
        setError("User Already Exists");
       return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push('/')
      } else {
        console.log("login registration field");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[30%]">
        <h1 className="text-[35px] font-bold font-mono">Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Enter name:</label> <br></br>
            <input
              name="name"
              id="name"
              className="p-1 border-[2px] w-full"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label>Enter Email:</label> <br></br>
            <input
              name="email"
              id="email"
              className="p-1 border-[2px] w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label>Enter Password:</label> <br></br>
            <input
              name="password"
              id="password"
              className="p-1 border-[2px] w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="test-sm w-full bg-blue-700 text-white p-2 mb-3 cursor-pointer">
            Registration
          </button>
        </form>
        {error && (
          <p className="bg-red-700 w-full p-1 text-white text-lg mb-3 text-center">
            {error}
          </p>
        )}
        <p>
          Do you Have a account?{" "}
          <Link
            href="/"
            className="text-blue-700 underline decoration-blue-700 cursor-pointer"
          >
            Login{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
