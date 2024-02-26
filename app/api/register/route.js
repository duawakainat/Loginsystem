import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrpyt from "bcryptjs";
export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrpyt.hash(password, 10);
    await connectMongoDB();
    await User.create({ name, email, password: hashedPassword });
    return NextResponse.json({ message: "User register" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error occuring while registration the user" },
      { status: 500 }
    );
  }
}
