import { ReactNode } from "react";

type IProps = {
  children: ReactNode;
};

function Content({ children }: IProps) {
  return (
    <div className="w-full ml-64 py-6 bg-primary">
      <div className="container 2xl:px-72 px-16 mx-auto">{children}</div>
    </div>
  );
}

export default Content;
