import { ReactNode } from "react";
import Sidebar from "@layout/sidebar/Sidebar";
import Content from "@layout/content/Content";
import Loader from "@components/Loader";

type IProps = {
  children: ReactNode;
  loading: boolean;
};

function Layout({ children, loading }: IProps) {
  return (
    <div className="flex min-h-screen text-gray-200">
      <Sidebar />
      <Content>{loading ? <Loader /> : children}</Content>
    </div>
  );
}

export default Layout;
