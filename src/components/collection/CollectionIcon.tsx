import { CollectionBgColors, ColorType } from "@customTypes/colors";
import React from "react";

type IProps = {
  color: ColorType;
  icon: React.ComponentType;
  size: string;
};

function CollectionIcon({ color, icon, size }: IProps) {
  const IconDisplay = icon;
  return (
    <div className="flex items-center">
      <div
        className={`${CollectionBgColors[color]} ${
          size === "large" ? "w-12 h-12" : "w-7 h-7"
        } p-1 rounded-lg shadow shadow-black/15 mr-3`}
      >
        <IconDisplay />
      </div>
    </div>
  );
}

export default CollectionIcon;
