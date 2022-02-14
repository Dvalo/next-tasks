import React, { ReactNode } from "react";
import Button from "@components/Button";
import { ButtonVariationsEnum } from "@config/color-map";
import { XCircleIcon } from "@heroicons/react/outline";

type IProps = {
  title: string;
  active: boolean;
  children: ReactNode;
  handleClose?: () => void;
};

function Modal({ title, active, children, handleClose }: IProps) {
  return (
    <>
      <div
        className={`${
          active ? "visible opacity-100" : "invisible opacity-0"
        } fixed left-0 top-0 h-full w-full bg-black/90 transition-all duration-300 ease-in`}
        onClick={handleClose}
      />
      <div
        className={`${
          active ? "visible mt-0 opacity-100" : "invisible -mt-14 opacity-0"
        } pointer-events-none fixed left-0 top-0 h-full w-full transition-all duration-300 ease-in`}
      >
        <div className="pointer-events-auto mx-auto mt-28 w-full max-w-md rounded-lg bg-secondary p-4">
          <div className="flex h-full flex-col justify-between">
            <div className="modal-content">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-bold text-gray-300">{title}</h3>
                <Button
                  type={ButtonVariationsEnum.error}
                  handleClick={handleClose}
                >
                  <XCircleIcon className="h-6 w-6" />
                </Button>
              </div>

              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
