import Navbar from "@/components/main/Navbar";
import Layout from "@/components/layouts/RootLayout";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
<Layout>
    <Navbar/>
{children}
</Layout>
     
    
      
      </body>
    </html>
  );
};

export default DashboardLayout;
