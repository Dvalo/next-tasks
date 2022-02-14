import { Collection } from "@customTypes/collection";
import { Task } from "@customTypes/task";
import React, { ReactNode, useState, useEffect, useContext } from "react";
import { initialTasks } from "@context/InitialTasks";

interface ITaskContext {
  tasks: Collection[];
  changeCompletion: (collectionId: number, taskId: number) => void;
  addTaskToCollection: (collectionId: number, taskId: Task) => void;
  removeTaskFromCollection: (collectionId: number, taskId: number) => number;
  createCollection: (collection: Collection) => void;
  deleteCollection: (collectionId: number) => void;
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

  function changeCompletion(collectionId: number, taskId: number) {
    const tasksCopy = [...tasks];
    const collectionIndex = tasks.findIndex(
      (collection) => collection.id === collectionId
    );
    const taskIndex = tasks[collectionIndex].tasks.findIndex(
      (task) => task.id === taskId
    );
    if (collectionIndex != -1 && taskIndex != -1) {
      const status = tasksCopy[collectionIndex].tasks[taskIndex].completed;
      tasksCopy[collectionIndex].tasks[taskIndex].completed = !status;
      setTasks([...tasksCopy]);
    }
  }

  function addTaskToCollection(collectionId: number, task: Task) {
    const collectionIndex = tasks.findIndex(
      (collection) => collection.id === collectionId
    );
    if (collectionIndex !== -1) {
      setTasks((prevState) => [
        ...prevState.slice(0, collectionIndex),
        {
          ...prevState[collectionIndex],
          tasks: [...prevState[collectionIndex].tasks, task],
        },
        ...prevState.slice(collectionIndex + 1),
      ]);
    }
  }

  function removeTaskFromCollection(collectionId: number, taskId: number) {
    console.log("removed task to collection");
    return 1;
  }

  function createCollection(collection: Collection) {
    setTasks((prevState) => [...prevState, collection]);
  }

  function deleteCollection(collectionId: number) {
    setTasks((prevState) =>
      prevState.filter((collection) => collection.id !== collectionId)
    );
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        changeCompletion,
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
