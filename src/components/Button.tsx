import React, { ReactNode } from "react";
import { buttonVariations, ButtonVariationsEnum } from "@config/color-map";

type IProps = {
  type: ButtonVariationsEnum;
  children: ReactNode;
  handleClick?: () => void;
};

function Button({ type, children, handleClick }: IProps) {
  return (
    <button
      type="button"
      {...(handleClick && { onClick: () => handleClick() })}
      className={`${buttonVariations[type].bg} ${buttonVariations[type].hover} 
          mr-4 rounded-lg px-5 py-2 text-center text-sm font-medium text-white last:mr-0 focus:ring-0`}
    >
      {children}
    </button>
  );
}

export default Button;
