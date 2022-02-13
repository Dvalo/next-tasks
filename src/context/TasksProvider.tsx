import { Collection } from "@customTypes/collection";
import { Task } from "@customTypes/task";
import React, { ReactNode, useState, useEffect, useContext } from "react";
import { initialTasks } from "@context/InitialTasks";

interface ITaskContext {
  tasks: Collection[];
  markAsComplete: (id: number) => number;
  addTaskToCollection: (collectionId: number, taskId: number) => number;
  removeTaskFromCollection: (collectionId: number, taskId: number) => number;
  createCollection: (collection: Collection) => void;
  deleteCollection: (collectionId: number) => number;
}

const TasksContext = React.createContext<ITaskContext | undefined>(undefined);

type IProps = {
  children: ReactNode;
};

function TasksProvider({ children }: IProps) {
  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    const tasksData = JSON.parse(
      localStorage.getItem("tasks") || JSON.stringify(initialTasks)
    );
    if (tasksData) {
      setTasks(tasksData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function markAsComplete(id: number) {
    console.log("marked as complete");
    return 1;
  }

  function addTaskToCollection(collectionId: number, taskId: number) {
    console.log("added task to collection");
    return 1;
  }

  function removeTaskFromCollection(collectionId: number, taskId: number) {
    console.log("removed task to collection");
    return 1;
  }

  function createCollection(collection: Collection) {
    setTasks((prevState) => [...prevState, collection]);
  }

  function deleteCollection(collectionId: number) {
    console.log("deleted collection");
    return 1;
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        markAsComplete,
        addTaskToCollection,
        removeTaskFromCollection,
        createCollection,
        deleteCollection,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

function useTasksContext() {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error("useTodoContext must be within TodoProvider");
  }
  return context;
}

export { TasksProvider, TasksContext, useTasksContext };
