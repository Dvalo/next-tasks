import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import CollectionItem from "@components/collection/CollectionItem";
import TaskItem from "@components/TaskItem";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Collection } from "@customTypes/collection";
import {
  backgroundColorFallback,
  borderColorFallback,
} from "@helpers/fallback";

type IProps = {
  collection: Collection;
};

function OverviewCard({ collection }: IProps) {
  const [active, setActive] = useState(true);
  const [height, setHeight] = useState("0px");

  const contentSpace = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentSpace.current && active) {
      setHeight(`${contentSpace.current.scrollHeight}px`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentSpace]);

  function toggleAccordion() {
    setActive((prevState) => !prevState);
    if (contentSpace.current) {
      setHeight(active ? "0px" : `${contentSpace.current.scrollHeight}px`);
    }
  }

  return (
    <div className="bg-secondary rounded-lg shadow-lg mb-8 last:mb-0">
      <div
        className="cursor-pointer flex items-center justify-between bg-secondaryl rounded-t-lg p-5"
        onClick={toggleAccordion}
      >
        <CollectionItem collection={collection} />
        <ChevronDownIcon
          className={`h-8 w-8 transform duration-500 ease ${
            active ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-hidden duration-500 ease-in-out"
      >
        <div className="py-8 px-5">
          {collection.tasks.map((task) => (
            <TaskItem
              borderColor={borderColorFallback(collection.color)}
              checkedColor={backgroundColorFallback(collection.color)}
              task={task}
              key={task.id}
            />
          ))}
        </div>
        <div className="flex items-center justify-center border-t border-slate-50/5 p-3">
          <Link href={`/collections/${collection.id}`} passHref>
            <a className="font-bold">Go to Collection</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OverviewCard;
