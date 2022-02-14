import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "@layout/index";
import PageTitle from "@components/PageTitle";
import TaskForm from "@components/form/TaskForm";
import Button from "@components/Button";
import Modal from "@components/modal/Modal";
import TaskItem from "@components/TaskItem";
import { ButtonVariationsEnum } from "@config/color-map";
import { useTasksContext } from "@context/TasksProvider";
import { ArrowCircleLeftIcon } from "@heroicons/react/outline";
import {
  backgroundColorFallback,
  borderColorFallback,
  textColorFallback,
} from "@helpers/fallback";

function CollectionPage() {
  const [modalActive, setModalActive] = useState(false);
  const { tasks, deleteCollection } = useTasksContext();
  const router = useRouter();
  const { id } = router.query;
  const currentCollection = tasks.filter((task) => task.id === Number(id))[0];
  const nonCompletedTasks = currentCollection
    ? currentCollection.tasks.filter((task) => !task.completed)
    : [];
  const completedTasks = currentCollection
    ? currentCollection.tasks.filter((task) => task.completed)
    : [];

  function handleDelete() {
    router.push("/");
    deleteCollection(Number(id));
  }

  function closeModal() {
    setModalActive(false);
  }

  function openModal() {
    setModalActive(true);
  }

  return (
    <Layout loading={!id || !currentCollection}>
      <Head>
        <title>Collection Tasks</title>
      </Head>
      {currentCollection && (
        <>
          <div className="flex items-center justify-between">
            <PageTitle title={currentCollection.title} />
            <div className="flex">
              <Link href="/" passHref>
                <a className="mr-4">
                  <Button type={ButtonVariationsEnum.info}>
                    <ArrowCircleLeftIcon className="h-6 w-6" />
                  </Button>
                </a>
              </Link>
              <Button
                type={ButtonVariationsEnum.success}
                handleClick={openModal}
              >
                Create Task
              </Button>
              <Button
                type={ButtonVariationsEnum.error}
                handleClick={handleDelete}
              >
                Delete Collection
              </Button>
            </div>
          </div>
          <div className="mt-6">
            <div className="mb-4">
              Remaining Tasks - {nonCompletedTasks.length}
            </div>
            {nonCompletedTasks.map((task) => (
              <TaskItem
                collectionId={currentCollection.id}
                textColor={textColorFallback(currentCollection.color)}
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
                textColor={textColorFallback(currentCollection.color)}
                borderColor={borderColorFallback(currentCollection.color)}
                checkedColor={backgroundColorFallback(currentCollection.color)}
                task={task}
                block={true}
                key={task.id}
              />
            ))}
          </div>
          <Modal
            title="Create Collection"
            active={modalActive}
            handleClose={closeModal}
          >
            <TaskForm
              collectionId={currentCollection.id}
              closeModal={closeModal}
            />
          </Modal>
        </>
      )}
    </Layout>
  );
}

export default CollectionPage;
