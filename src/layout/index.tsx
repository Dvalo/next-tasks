import { ReactNode } from "react";
import Sidebar from "@layout/sidebar/Sidebar";
import Content from "@layout/content/Content";

type IProps = {
  children: ReactNode;
};

function Layout({ children }: IProps) {
  return (
    <div className="flex min-h-screen text-gray-200">
      <Sidebar />
      <Content>{children}</Content>
    </div>
  );
}

export default Layout;
