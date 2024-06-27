import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="p-5">{children}</div>
      </div>
    </>
  );
}

export default MainLayout;
