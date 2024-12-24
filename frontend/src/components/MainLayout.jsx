import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-grow p-4 md:ml-64">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
