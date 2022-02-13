import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "@layout/index";
import PageTitle from "@components/PageTitle";
import { useTasksContext } from "@context/TasksProvider";
import TaskItem from "@components/TaskItem";
import {
  backgroundColorFallback,
  borderColorFallback,
} from "@helpers/fallback";

function CollectionPage() {
  const { tasks } = useTasksContext();
  const router = useRouter();
  const { id } = router.query;
  const currentCollection = tasks.filter((task) => task.id === Number(id))[0];
  const nonCompletedTasks = currentCollection
    ? currentCollection.tasks.filter((task) => !task.completed)
    : [];
  const completedTasks = currentCollection
    ? currentCollection.tasks.filter((task) => task.completed)
    : [];

  return (
    <Layout loading={!id || !currentCollection}>
      <Head>
        <title>Collection Tasks</title>
      </Head>
      {currentCollection && (
        <>
          <PageTitle title={currentCollection.title} />
          <div className="mt-6">
            <div className="mb-4">
              Remaining Tasks - {nonCompletedTasks.length}
            </div>
            {nonCompletedTasks.map((task) => (
              <TaskItem
                collectionId={currentCollection.id}
                borderColor={borderColorFallback(currentCollection.color)}
                checkedColor={backgroundColorFallback(currentCollection.color)}
                task={task}
                block={true}
                key={task.id}
              />
            ))}
            <div className="mb-4">
              Completed Tasks - {completedTasks.length}
            </div>
            {completedTasks.map((task) => (
              <TaskItem
                collectionId={currentCollection.id}
                borderColor={borderColorFallback(currentCollection.color)}
                checkedColor={backgroundColorFallback(currentCollection.color)}
                task={task}
                block={true}
                key={task.id}
              />
            ))}
          </div>
        </>
      )}
    </Layout>
  );
}

export default CollectionPage;
