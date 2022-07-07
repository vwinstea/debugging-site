import { Route, Routes } from "react-router-dom";
import About from "./About/About";
import "./App.css";
import CommonBugs from "./CommonBugs/CommonBugs";
import Console from "./Console/Console";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Testing from "./Testing/Testing";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="console" element={<Console />} />
        <Route path="testing" element={<Testing />} />
        <Route path="common-bugs" element={<CommonBugs />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
