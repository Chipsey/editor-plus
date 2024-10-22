import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteEditor from "../pages/editing-page";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NoteEditor />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
