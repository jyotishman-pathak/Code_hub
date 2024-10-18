import Nav from "@/components/dashboard/Nav";
import Layout from "@/components/layouts/RootLayout";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
<Layout>
  <Nav/>
{children}
    
</Layout>

      
      </body>
    </html>
  );
};

export default DashboardLayout;
