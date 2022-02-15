import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/outline";
import Modal from "@components/modal/Modal";
import Button from "@components/Button";
import { ButtonVariationsEnum } from "@config/color-map";

type IProps = {
  handleDelete: () => void;
};

function TaskDelete({ handleDelete }: IProps) {
  const [modalActive, setModalActive] = useState(false);

  function closeModal() {
    setModalActive(false);
  }

  function openModal() {
    setModalActive(true);
  }
  return (
    <>
      <button type="button" onClick={openModal}>
        <TrashIcon className="h-6 w-6 text-red-400 transition duration-300 hover:text-red-600" />
      </button>
      <Modal
        title="Are you sure you want to delete this task?"
        active={modalActive}
        handleClose={closeModal}
      >
        <Button type={ButtonVariationsEnum.success} handleClick={handleDelete}>
          Delete
        </Button>
        <Button type={ButtonVariationsEnum.error} handleClick={closeModal}>
          Cancel
        </Button>
      </Modal>
    </>
  );
}

export default TaskDelete;
