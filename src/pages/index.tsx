import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "@layout/index";
import PageTitle from "@components/PageTitle";
import Tab from "@components/tabs/Tab";
import Tabs from "@components/tabs/Tabs";
import Overview from "@components/OverviewCard";
import CollectionCard from "@components/collection/CollectionCard";
import CollectionCardCreate from "@components/collection/CollectionCardCreate";
import { DashboardTabs } from "@config/tabs";
import { useTasksContext } from "@context/TasksProvider";

const Home: NextPage = () => {
  const { tasks } = useTasksContext();
  const [activeTab, setActiveTab] = useState(DashboardTabs.Overview);

  function handleTabChange(tab: DashboardTabs) {
    setActiveTab(tab);
  }

  return (
    <Layout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <PageTitle title="Dashboard" />
      <div className="mt-6">
        <Tabs onChange={handleTabChange} activeTab={activeTab}>
          <Tab value={DashboardTabs.Overview} title="Overview" />
          <Tab value={DashboardTabs.Collections} title="All Collections" />
        </Tabs>
      </div>
      <div className="mt-6">
        {activeTab === "overview" && (
          <>
            {tasks &&
              tasks.map((collection) => (
                <Overview collection={collection} key={collection.id} />
              ))}
          </>
        )}
        {activeTab === "collections" && (
          <div className="grid grid-cols-3 gap-4">
            {tasks &&
              tasks.map((collection) => (
                <CollectionCard collection={collection} key={collection.id} />
              ))}
            <CollectionCardCreate />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
