import React from "react";
import { Routes, Route } from "react-router-dom";

import { lazy, Suspense, useRef } from "react";

import Layout from "../MoboleLayout";
import LinearDeterminate from "../mobile-component/loader/LinerLoader";

const MobileSpalsh = () => {
  const MobileScreen = lazy(() => import("../mobile-pages"));

  return (
    <>
      <Suspense
        fallback={
          <div className="linearLoader">
            <LinearDeterminate />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MobileScreen />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default MobileSpalsh;
