import React, { useState } from "react";
import Select, { SingleValue } from "react-select";
import Button from "@components/Button";
import {
  collectionColorsSelect,
  ButtonVariationsEnum,
} from "@config/color-map";
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
      title: title || "Unnamed Collection",
      icon: icon || collectionIconsSelect[0].value,
      color: color || collectionColorsSelect[0].value,
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
        className="focus:blue-amber-300 block w-full rounded-md border-gray-600/50 bg-white/5 p-2.5 text-sm text-white placeholder-gray-100 transition duration-300 focus:border focus:ring-0"
        placeholder="Collection Name"
        value={title}
        onChange={handleNameChange}
        required
      />
      <div className="mt-3 flex">
        <Select
          placeholder="Icon"
          isSearchable={false}
          isClearable={true}
          options={collectionIconsSelect}
          defaultValue={collectionIconsSelect[0]}
          classNamePrefix="cselect"
          onChange={(values) => handleSelectChange(values, "icon")}
        />
        <Select
          placeholder="Color"
          isSearchable={false}
          isClearable={true}
          options={collectionColorsSelect}
          defaultValue={collectionColorsSelect[0]}
          className="ml-4"
          classNamePrefix="cselect"
          onChange={(values) => handleSelectChange(values, "color")}
        />
      </div>
      <div className="mt-5">
        <Button type={ButtonVariationsEnum.success} handleClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </>
  );
}

export default CollectionForm;
