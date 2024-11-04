import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

const HomePage = lazy(() => import("../pages/HomePage"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
