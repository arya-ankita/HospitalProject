import "./App.css";
import "./responsive.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Appointment from "./components/Appointment";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment/:type" element={<Appointment />} />
      </Routes>
    </div>
  );
}

export default App;
