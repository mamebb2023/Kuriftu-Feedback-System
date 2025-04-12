import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feedback" element={<Feedback />} />
    </Routes>
  );
}

export default App;
