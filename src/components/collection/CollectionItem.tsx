import React from "react";
import { collectionIcons } from "@config/icon-map";
import { Collection } from "@customTypes/collection";
import CollectionIcon from "@components/collection/CollectionIcon";

type IProps = {
  collection: Collection;
  textSize?: string;
};

function CollectionItem({ collection, textSize = "base" }: IProps) {
  return (
    <div className="flex items-center">
      <CollectionIcon
        color={collection.color}
        icon={collectionIcons[collection.icon]}
        size="medium"
      />
      <div
        className={`text-gray-100 font-bold ${
          textSize === "large" ? "text-lg" : "text-base"
        } tracking-wide`}
      >
        {collection.title}
      </div>
    </div>
  );
}

export default CollectionItem;
