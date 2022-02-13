import React from "react";
import Select, { SingleValue } from "react-select";
import { collectionColorsSelect, ColorsEnum } from "@config/color-map";
import { collectionIconsSelect, IconsEnum } from "@config/icon-map";
import { ISelect } from "@customTypes/select";

type IProps = {
  name: string;
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (e: SingleValue<ISelect>, type: string) => void;
};

function CollectionForm({
  name,
  handleNameChange,
  handleSelectChange,
}: IProps) {

  return (
    <div>
      <h3 className="text-gray-300 font-bold mb-4">Create Collection</h3>
      <div className="mb-5">
        <input
          type="email"
          id="email"
          className="bg-white/5 border-gray-600/50 placeholder-gray-100 text-white text-sm rounded-md block w-full p-2.5 duration-300 transition focus:ring-0 focus:blue-amber-300 focus:border"
          placeholder="Collection Name"
          value={name}
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
            onChange={(e) => handleSelectChange(e, "icon")}
          />
          <Select
            placeholder="Color"
            isSearchable={false}
            isClearable={true}
            options={collectionColorsSelect}
            className="ml-4"
            classNamePrefix="test"
            onChange={(e) => handleSelectChange(e, "color")}
          />
        </div>
      </div>
    </div>
  );
}

export default CollectionForm;
