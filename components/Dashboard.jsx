'use client'
import React from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
const Dashboard = () => {
  const { data: session,status } = useSession();
  console.log(session);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[30%] shadow-lg shadow-indigo-500/50 p-4">
        <div className="mb-4">
          <h1 className="text-lg font-semibold text-red-400">
            UserEmail: {session?.user?.name}
          </h1>{" "}
          <br></br>
        </div>
        <div className="mb-4">
          <h1 className="text-lg font-semibold">
            Email: {session?.user?.email}
          </h1>{" "}
          <br></br>
        </div>
        <button
          onClick={() => signOut()}
          className="test-sm w-full bg-blue-700 text-white p-2 mb-3 cursor-pointer"
        >
          Login Out
        </button>
      </div>
    </div> 
  );}

export default Dashboard;
