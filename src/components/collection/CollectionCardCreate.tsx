import { useState } from "react";
import { SingleValue } from "react-select";
import { ViewGridAddIcon } from "@heroicons/react/outline";
import Modal from "@components/modal/Modal";
import CollectionForm from "@components/form/CollectionForm";
import { ISelect } from "@customTypes/select";

function CollectionCardCreate() {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [color, setColor] = useState("");
  const [modalActive, setModalActive] = useState(false);

  function closeModal() {
    setModalActive(false);
  }

  function openModal() {
    setModalActive(true);
  }

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleSelectChange(e: SingleValue<ISelect>, type: string) {
    if (type === "icon" && e) {
      setIcon(e.value);
    }
    if (type === "color" && e) {
      setColor(e.value);
    }
  }

  function handleSubmit() {
    console.log(name, icon, color);
    console.log("submitted");
  }

  return (
    <>
      <div
        onClick={openModal}
        className="group cursor-pointer flex justify-center border-2 border-dashed border-secondary/50 rounded-xl p-6 h-36 min-h-full ease-out duration-300 hover:border-secondary"
      >
        <ViewGridAddIcon className="text-gray-100 w-10 h-10 opacity-30 ease-out duration-500 group-hover:opacity-80" />
      </div>
      <Modal
        active={modalActive}
        handleClose={closeModal}
        handleSubmit={handleSubmit}
      >
        <CollectionForm
          name={name}
          handleNameChange={handleNameChange}
          handleSelectChange={handleSelectChange}
        />
      </Modal>
    </>
  );
}

export default CollectionCardCreate;
