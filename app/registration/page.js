export const metadata = {
  title: "Registration Page",
  description: "Registration Page is here",
};
import React from "react";
import RegistrationForm from "@/components/RegistrationForm";
// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";
// import { authOptions } from "../api/auth/[...nextauth]/route";
// export default async function page(){
//   const session = await getServerSession(authOptions);
//   if (session) redirect("/dashboard");
//   return <RegistrationForm />;
// }
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
export default async function page() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");
  return (
          <RegistrationForm />
  );
}

// const page = () => {
  
//   return (
//     <div>
//     <main>
//     <RegistrationForm />
//     </main></div>
//   )
// }

// export default page