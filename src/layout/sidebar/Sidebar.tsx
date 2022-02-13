import React from "react";
import Link from "next/link";
import CollectionItem from "@components/collection/CollectionItem";
import { useTasksContext } from "@context/TasksProvider";

function Sidebar() {
  const { tasks } = useTasksContext();
  return (
    <aside className="fixed bg-secondary h-full w-64">
      <h1 className="font-bold text-gray-300 tracking-wide text-lg p-6">
        Collections
      </h1>
      <div className="flex flex-col">
        {tasks && tasks.map((collection) => (
          <Link
            href={`/collections/${collection.id}`}
            passHref
            key={collection.id}
          >
            <a className="px-6 py-2 ease-out duration-300 mb-2 last:mb-0 hover:bg-slate-100/10">
              <CollectionItem collection={collection} />
            </a>
          </Link>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
