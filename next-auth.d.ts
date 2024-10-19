// next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Add the id of the user
      sessionId?: string; // Optional sessionId property
    } & DefaultSession["user"];
  }

  interface User {
    id: string; // Add user ID if not already present
    sessionId?: string; // Optional sessionId property
  }
}
