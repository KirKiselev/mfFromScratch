import React, { Suspense } from "react";
import Layout from "./components/Layout";

const RemoteButton = React.lazy(() => import("remote1/Button"));
const RemoteButton2 = React.lazy(() => import("remote2/Button"));

const App: React.FC = () => {
  return (
    <Layout>
      <h1>Host Application</h1>
      <Suspense fallback="Loading Remote Button...">
        <RemoteButton />
      </Suspense>
      <Suspense fallback="Loading Remote Button...">
        <RemoteButton2 />
      </Suspense>
    </Layout>
  );
};

export default App;
