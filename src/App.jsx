import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Homepage from "./pages/Home/homepage";
import Resume from "./pages/Resume/resume";
import notes from "./pages/Home/ProfileNote";
import Projects from "./pages/Projects/Projects";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <BrowserRouter basename="/Portfolio-website">
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Routes>
        <Route path="/" element={<Homepage notes={notes} />} />
        <Route path="/Homepage" element={<Homepage notes={notes} />} />
        <Route path="/Projects" element={<Projects showSidebar={showSidebar} />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
