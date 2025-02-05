import React from "react";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

/* pages */
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="InternIntelligence_portfolio/" element={<Home />} />
        <Route path="InternIntelligence_portfolio/about" element={<About />} />
        <Route
          path="InternIntelligence_portfolio/resume"
          element={<Resume />}
        />
        <Route
          path="InternIntelligence_portfolio/projects"
          element={<Projects />}
        />
        <Route
          path="InternIntelligence_portfolio/contact"
          element={<Contact />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
