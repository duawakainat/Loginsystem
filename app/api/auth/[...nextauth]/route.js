
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import bcrypt from "bcryptjs";
import CredentailsProvider from "next-auth/providers/credentials";
export const authOptions = {
  providers: [
    CredentailsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectMongoDB();
          const user = await User.findOne({ email });
          if (!user) {
            return null;
          }

          const matchPassword = await bcrypt.compare(
            password,
            user.password
          );
          if (!matchPassword) {
            return null;
          }
          console.log(user);
          return user;
          
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
