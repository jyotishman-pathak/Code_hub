import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "../main/theme-provider";

const SessionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
};

export default SessionLayout;
