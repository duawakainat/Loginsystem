export const metadata = {
  title: "Registration Page",
  description: "Registration Page is here",
};
import React from "react";
import RegistrationForm from "@/components/RegistrationForm";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
export default async function page() {
  const session = await getServerSession(authOptions);
  if (session) redirect("https://65d46336927c9ba567222a97--magical-sfogliatella-86478b.netlify.app/");
  return (
          <RegistrationForm />
  );
}

  
//   return (
//     <div>
//     <main>
//     <RegistrationForm />
//     </main></div>
//   )
// }

// export default page