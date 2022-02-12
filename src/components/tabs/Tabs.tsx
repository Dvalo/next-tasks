import React, { ReactNode } from "react";

type IProps = {
  children: ReactNode;
  onChange: (value: string) => void;
};

function Tabs({ children, onChange }: IProps) {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { onChange });
    }
    return child;
  });
  return <div className="flex">{childrenWithProps}</div>;
}

export default Tabs;
