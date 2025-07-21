import { ReactNode } from "react";
import "../globals.css";
import AdminNavigationBar from "@/components/common-ui/admin-navbar";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1>Home</h1>
      {children}
    </div>
  );
};
export default AuthLayout;
