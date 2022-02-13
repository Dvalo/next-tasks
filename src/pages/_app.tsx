import type { AppProps } from "next/app";
import { TasksProvider } from "@context/TasksProvider";

import "@styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TasksProvider>
      <Component {...pageProps} />
    </TasksProvider>
  );
}

export default MyApp;
