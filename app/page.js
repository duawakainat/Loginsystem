export const metadata = {
  title: "Login Page",
  description: "Login Page is here",
};
import React from 'react'
import Form from "@/components/Form";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
export default async function page() {
  const session = await getServerSession(authOptions);
  if (session) redirect("https://65d46336927c9ba567222a97--magical-sfogliatella-86478b.netlify.app/");
  return (
          <Form />
  );
}
