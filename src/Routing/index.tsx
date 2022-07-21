import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import { lazy, Suspense, useRef } from "react";
import SmallLoader from "../components/loader/smallLoader";
const Routing = () => {
  const Home = lazy(() => import("../pages"));

  return (
    <>
      <Suspense
        fallback={
          <div className="lazyloader">
            <SmallLoader />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default Routing;
