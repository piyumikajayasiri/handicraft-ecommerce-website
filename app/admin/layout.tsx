import { ReactNode } from "react";
import "../globals.css";
import SideNavigationBar from "@/components/common-ui/side-navbar";
import { Toaster } from "@/components/ui/sonner";
const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>
        <Toaster />
        <div className="flex flex-row">
          <div className="flex-1/5 bg-black text-white">
            <SideNavigationBar />
          </div>
          <div className="flex flex-col flex-4/5">
            <div className="bg-[#282D31] text-[#282D31] p-2 h-30">Home</div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminLayout;
