import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import CollectionItem from "@components/collection/CollectionItem";
import TaskItem from "@components/TaskItem";
import { ChevronDownIcon, ArrowCircleRightIcon } from "@heroicons/react/solid";
import { Collection } from "@customTypes/collection";
import {
  backgroundColorFallback,
  borderColorFallback,
  textColorFallback,
} from "@helpers/fallback";

type IProps = {
  collection: Collection;
};

function OverviewCard({ collection }: IProps) {
  const [active, setActive] = useState(true);
  const [height, setHeight] = useState("0px");

  const contentSpace = useRef<HTMLDivElement>(null);

  const nonCompletedTasks = collection.tasks.filter((task) => !task.completed);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (contentSpace.current && active) {
        setHeight(`${contentSpace.current.scrollHeight}px`);
      }
    }, 500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentSpace]);

  function toggleAccordion() {
    setActive((prevState) => !prevState);
    if (contentSpace.current) {
      setHeight(active ? "0px" : `${contentSpace.current.scrollHeight}px`);
    }
  }

  return (
    <div className="mb-8 rounded-lg bg-secondary shadow-lg last:mb-0">
      <div
        className="flex cursor-pointer items-center justify-between rounded-t-lg bg-secondaryl p-5"
        onClick={toggleAccordion}
      >
        <CollectionItem collection={collection} />
        <ChevronDownIcon
          className={`ease h-8 w-8 transform duration-500 ${
            active
              ? "rotate-180 hover:text-red-500"
              : "rotate-0 hover:text-lime-500"
          }`}
        />
      </div>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-hidden duration-500 ease-in-out"
      >
        <div className="py-8 px-5">
          {nonCompletedTasks.map((task) => (
            <TaskItem
              collectionId={collection.id}
              textColor={textColorFallback(collection.color)}
              borderColor={borderColorFallback(collection.color)}
              checkedColor={backgroundColorFallback(collection.color)}
              task={task}
              key={task.id}
            />
          ))}
        </div>
        <div className="flex items-center justify-center border-t border-slate-50/5 p-3">
          <Link href={`/collections/${collection.id}`} passHref>
            <a className="group flex items-center font-bold">
              <span className="transition-all duration-150 group-hover:tracking-wider group-hover:text-lime-200">
                Go to Collection
              </span>
              <ArrowCircleRightIcon className="h-5 w-5 translate-x-2 transition-transform duration-150 group-hover:translate-x-3 group-hover:text-lime-200" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OverviewCard;
