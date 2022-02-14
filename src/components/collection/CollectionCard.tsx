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
      <a className="mb-4 flex h-48 min-h-full rounded-xl bg-secondary p-6 duration-300 ease-out last:mb-0 hover:bg-secondary_hover">
        <div className="flex w-full flex-col justify-between">
          <CollectionIcon
            color={collection.color}
            icon={collectionIcons[collection.icon]}
            size="large"
          />
          <div>
            <div className="font-bold tracking-wide text-gray-100">
              {collection.title}
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="text-sm text-gray-400">
                {completedTasks === 0 && totalTasks === 0
                  ? "No tasks"
                  : `${completedTasks}/${totalTasks} completed`}
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
