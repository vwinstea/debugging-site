import { Box } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import About from "./About/About";
import "./App.css";
import CommonBugs from "./CommonBugs/CommonBugs";
import DevTools from "./DevTools/DevTools";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Testing from "./Testing/Testing";

function App() {
  return (
    <div>
      <Navbar />
      <Box sx={{ paddingX: 5 }}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="dev-tools" element={<DevTools />} />
          <Route path="testing" element={<Testing />} />
          <Route path="common-bugs" element={<CommonBugs />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
