import "./styles.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ContactPage from "./pages/Contactme";
import MyProjects from "./pages/Projects";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/contact-me" element={<ContactPage />} />
        <Route path="/projects" element={<MyProjects />} />
      </Routes>
    </div>
  );
}
