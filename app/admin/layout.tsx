import { ReactNode } from "react";
import "../globals.css";
import AdminNavigationBar from "@/components/common-ui/admin-navbar";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <AdminNavigationBar />
      {children}
    </div>
  );
};
export default AdminLayout;
