import React from "react";
import Link from "next/link";
import ProgressBar from "@components/ProgressBar";
import CollectionIcon from "@components/collection/CollectionIcon";
import { Collection } from "@customTypes/collection";
import { collectionIcons } from "@config/icon-map";

type IProps = {
  collection: Collection;
};

function CollectionCard({ collection }: IProps) {
  const totalTasks = collection.tasks.length;
  const completedTasks = collection.tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <Link href={`/collections/${collection.id}`} passHref>
      <a className="flex bg-secondary rounded-xl p-6 h-48 min-h-full mb-4 ease-out duration-300 last:mb-0 hover:bg-secondary_hover">
        <div className="flex flex-col justify-between w-full">
          <CollectionIcon
            color={collection.color}
            icon={collectionIcons[collection.icon]}
            size="large"
          />
          <div>
            <div className="text-gray-100 font-bold tracking-wide">
              {collection.title}
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="text-sm text-gray-400">
                {completedTasks}/{totalTasks} completed
              </div>
              <ProgressBar
                color={collection.color}
                progress={Math.round((completedTasks / totalTasks) * 100) || 0}
              />
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default CollectionCard;
