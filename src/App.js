/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable-next-line no-unused-vars */
import { Route, Routes } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import ProjectPage from "pages/ProjectPage";
import NotFoundPage from "pages/NotFoundPage";
import TeamPage from "pages/TeamPage";

import { ProjectDetailPage } from "pages/ProjectDetailPage";
// import { DiscussProjectPage } from "pages/DiscussProjectPage";
import Service from "parts/Service";
import "./assets/css/styles.css";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/service" element={<Service />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route exact path="/project/:id" element={<ProjectDetailPage />} />
        <Route exact path="/team" element={<TeamPage />} />
        <Route exact path="/contact" element={<Contact />} />
        {/* <Route exact path="/discuss-project" element={<DiscussProjectPage />} /> */}
        <Route path="**" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
