import React, { ReactNode } from "react";

type IProps = {
  children: ReactNode;
  onChange: (value: string) => void;
  activeTab: string;
};

function Tabs({ children, onChange, activeTab }: IProps) {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { onChange, activeTab });
    }
    return child;
  });
  return <div className="flex">{childrenWithProps}</div>;
}

export default Tabs;
