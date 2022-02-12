import React from "react";
import { ColorType } from "@customTypes/colors";
import { backgroundColorFallback } from "@helpers/fallback";

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
        className={`${backgroundColorFallback(color)} ${
          size === "large" ? "w-12 h-12 p-2" : "w-7 h-7 p-1"
        } rounded-lg shadow shadow-black/15 mr-3`}
      >
        <IconDisplay />
      </div>
    </div>
  );
}

export default CollectionIcon;
