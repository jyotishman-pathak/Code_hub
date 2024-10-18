import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { z } from "zod";
import { prisma } from "./lib/db";

// Update the Zod schema to allow for nullable strings
const userSchema = z.object({
  name: z.string().nullable(),
  email: z.string().nullable(),
  image: z.string().nullable()
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET
    })
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        // Validate user object using Zod
        const parsedUser = userSchema.safeParse({
          name: user.name,
          email: user.email,
          image: user.image
        });

        // If parsing fails, log error and reject sign-in
        if (!parsedUser.success) {
          console.error("User data validation failed:", parsedUser.error);
          return false;
        }

        const { email, image, name } = parsedUser.data;

        // Ensure fields are not null before passing them to Prisma
        const userEmail = email ?? ""; // Fallback to an empty string if email is null
        const userImage = image ?? ""; // Fallback to an empty string if image is null
        const userName = name ?? "";   // Fallback to an empty string if name is null

        // Check if the user exists in the database
        const existingUser = await prisma.user.findUnique({
          where: { email: userEmail }
        });

        if (!existingUser && userEmail) {
          // If the user doesn't exist and email is not null, create a new user in the database
          const newUser = await prisma.user.create({
            data: {
              email: userEmail,
              image: userImage,
              name: userName
            }
          });

          console.log("New user created: ", newUser);
        }

        // Returning true to allow sign-in to proceed
        return true;
      } catch (error) {
        console.error("Error during sign-in: ", error);
        return false; // If an error occurs, reject sign-in
      }
    }
  }
});
