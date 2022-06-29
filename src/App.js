import React, { useRef } from "react";
import './App.css';
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import SmallLoader from './component/loader/smallLoader';
import Navbar from './component/navbar';
import Footer from "./component/footer/Footer";
import Appointment from "./pages/appoinment.view";

const Home = lazy(() =>
  import("./pages")
);
function App() {
  const titleRef = useRef();
  function handleClick() {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="App">
      <Navbar handleClick={handleClick} />
      <Suspense
        fallback={
          <div className="lazyloader">
            <SmallLoader />
          </div>
        }>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/appointment/:type" element={<Appointment />} />
        </Routes>
      </Suspense>
      <Footer />

    </div >
  );
}

export default App;
