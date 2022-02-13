import React, { ReactNode } from "react";

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
          active ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed w-full h-full left-0 top-0 transition-all duration-300 ease-in bg-black/90`}
        onClick={handleClose}
      />
      <div
        className={`${
          active ? "opacity-100 visible mt-0" : "opacity-0 invisible -mt-14"
        } pointer-events-none fixed left-0 w-full h-full top-0 transition-all duration-300 ease-in`}
      >
        <div className="pointer-events-auto mt-28 mx-auto max-w-md w-full p-4 rounded-lg bg-secondary">
          <div className="flex flex-col justify-between h-full">
            <div className="modal-content">
              <div className="flex justify-between mb-6">
                <h3 className="text-gray-300 font-bold mb-4">{title}</h3>
                <button
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-red-800/50 font-medium rounded-lg text-sm px-5 py-2 text-center"
                  onClick={handleClose}
                >
                  Close
                </button>
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
