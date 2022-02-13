import { useState } from "react";
import { ViewGridAddIcon } from "@heroicons/react/outline";
import Modal from "@components/modal/Modal";
import CollectionForm from "@components/form/CollectionForm";

function CollectionCardCreate() {
  const [modalActive, setModalActive] = useState(false);

  function closeModal() {
    setModalActive(false);
  }

  function openModal() {
    setModalActive(true);
  }

  return (
    <>
      <div
        onClick={openModal}
        className="group cursor-pointer flex justify-center border-2 border-dashed border-secondary/50 rounded-xl p-6 h-36 ease-out duration-300 hover:border-secondary"
      >
        <ViewGridAddIcon className="text-gray-100 w-10 h-10 opacity-30 ease-out duration-500 group-hover:opacity-80" />
      </div>
      <Modal
        title="Create Collection"
        active={modalActive}
        handleClose={closeModal}
      >
        <CollectionForm closeModal={closeModal} />
      </Modal>
    </>
  );
}

export default CollectionCardCreate;
