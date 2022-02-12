import React from "react";

type IProps = {
  value: string;
  title: string;
  onChange?: (value: string) => void;
  activeTab?: string;
};

function Tab({ value, title, onChange, activeTab }: IProps) {
  return (
    <div
      className={`cursor-pointer py-1.5 px-4 rounded-lg border-2 border-slate-100/10 mr-5 last:mr-0 ease-out duration-150 ${
        value === activeTab ? "bg-slate-100/20" : "hover:bg-slate-100/20"
      }`}
      {...(onChange && { onClick: () => onChange(value) })}
    >
      <div className="font-bold text-sm tracking-wide">{title}</div>
    </div>
  );
}

export default Tab;
