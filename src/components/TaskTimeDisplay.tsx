import React, { ReactNode } from "react";
import { ClockIcon } from "@heroicons/react/outline";

type IProps = {
  color: string;
  children: ReactNode;
};

function TaskTimeDisplay({ color, children }: IProps) {
  return (
    <div className="ml-9 mt-2 flex items-center">
      <ClockIcon className={`h-6 w-6 ${color}`} />
      {children}
    </div>
  );
}

export default TaskTimeDisplay;
