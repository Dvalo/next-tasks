import { ReactNode } from "react";

type IProps = {
  children: ReactNode;
};

function Content({ children }: IProps) {
  return (
    <div className="ml-64 w-full bg-primary py-6">
      <div className="container mx-auto h-full px-16 2xl:px-72">{children}</div>
    </div>
  );
}

export default Content;
