import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../src/components/MainLayout";
import Add from "../src/components/Add";
import Display from "../src/components/Display";
import { EmployeeProvider } from "./context/EmployeeContext";

const App = () => {
  return (
    <EmployeeProvider>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="add" element={<Add />} />
          <Route path="display" element={<Display />} />
        </Route>
      </Routes>
    </Router>
    </EmployeeProvider>
  );
};

export default App;
