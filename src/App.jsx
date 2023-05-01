import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";


import Recommendation from "./pages/Recommendation";
import Top20 from "./pages/Top20";
import Notice from "./pages/Notice";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Recommendation" element={<Recommendation />} />
          <Route path="/Top20" element={<Top20 />} />
          <Route path="/Notice" element={<Notice />} />
        </Routes>
      </Router>
    </div>
  );
}