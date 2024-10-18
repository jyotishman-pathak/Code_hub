
import { ThemeProvider } from "../main/theme-provider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
     {children}
    </ThemeProvider>
  );
};

export default Layout;
