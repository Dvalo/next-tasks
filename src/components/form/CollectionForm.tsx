import React, { useState } from "react";
import Select, { SingleValue } from "react-select";
import { collectionColorsSelect } from "@config/color-map";
import { collectionIconsSelect } from "@config/icon-map";
import { ISelect } from "@customTypes/select";
import { useTasksContext } from "@context/TasksProvider";

type IProps = {
  closeModal: () => void;
};

function CollectionForm({ closeModal }: IProps) {
  const { createCollection } = useTasksContext();

  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const [color, setColor] = useState("");

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  function handleSelectChange(values: SingleValue<ISelect>, type: string) {
    if (type === "icon" && values) {
      setIcon(values.value);
    }
    if (type === "color" && values) {
      setColor(values.value);
    }
  }

  function handleSubmit() {
    const collection = {
      id: Math.floor(Math.random() * 100),
      title,
      icon,
      color,
      tasks: [],
    };
    createCollection(collection);
    closeModal();
    setTitle("");
    setIcon("");
    setColor("");
  }

  return (
    <>
      <input
        type="email"
        id="email"
        className="bg-white/5 border-gray-600/50 placeholder-gray-100 text-white text-sm rounded-md block w-full p-2.5 duration-300 transition focus:ring-0 focus:blue-amber-300 focus:border"
        placeholder="Collection Name"
        value={title}
        onChange={handleNameChange}
        required
      />
      <div className="flex mt-3">
        <Select
          placeholder="Icon"
          isSearchable={false}
          isClearable={true}
          options={collectionIconsSelect}
          classNamePrefix="test"
          onChange={(values) => handleSelectChange(values, "icon")}
        />
        <Select
          placeholder="Color"
          isSearchable={false}
          isClearable={true}
          options={collectionColorsSelect}
          className="ml-4"
          classNamePrefix="test"
          onChange={(values) => handleSelectChange(values, "color")}
        />
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        className="text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-800/50 font-medium rounded-lg text-sm px-5 py-2 text-center mt-5"
      >
        Submit
      </button>
    </>
  );
}

export default CollectionForm;