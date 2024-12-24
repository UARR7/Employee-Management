import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-white shadow w-full md:w-64 h-auto md:h-screen md:fixed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="space-y-2">
          <NavLink
            to="/display"
            className="block px-4 py-2 text-black font-medium rounded hover:bg-gray-100"
            activeClassName="bg-gray-200"
          >
            Display
          </NavLink>
          <NavLink
            to="/add"
            className="block px-4 py-2 text-black font-medium rounded hover:bg-gray-100"
            activeClassName="bg-gray-200"
          >
            Add
          </NavLink>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;


// import React from "react";
// import { NavLink } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <aside className="bg-white shadow-md p-4 w-full sm:w-64">
//       <nav>
//         <NavLink
//           to="/display"
//           className={({ isActive }) => (isActive ? "text-black font-bold" : "text-gray-600")}
//         >
//           Display
//         </NavLink>
//         <NavLink
//           to="/add"
//           className={({ isActive }) => (isActive ? "text-black font-bold" : "text-gray-600")}
//         >
//           Add
//         </NavLink>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;
