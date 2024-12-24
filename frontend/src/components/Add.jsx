
// import React from "react";

// const Add = () => {
//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">Add Page</h1>
//       <p>This is the Add page where you can add new items.</p>
//     </div>
//   );
// };

// export default Add;

//////////////////////////////////////////////////////////////////
// import React, { useState } from "react";

// const Add = () => {
//   const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "" });
//   const [employees, setEmployees] = useState([]);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Add new employee
//   const handleAdd = async () => {
//     try {
//       const response = await fetch("http://localhost:8080/api/employee", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const newEmployee = await response.json();
//       setEmployees((prev) => [...prev, newEmployee]); // Update state
//       setFormData({ firstName: "", lastName: "", email: "" }); // Clear form
//     } catch (error) {
//       console.error("Error adding employee:", error);
//     }
//   };

//   // Delete employee
//   const handleDelete = async (id) => {
//     try {
//       await fetch(`http://localhost:8080/api/employee/${id}`, { method: "DELETE" });
//       setEmployees((prev) => prev.filter((employee) => employee.id !== id)); // Update state
//     } catch (error) {
//       console.error("Error deleting employee:", error);
//     }
//   };

//   // Fetch employees (for display and update)
//   const fetchEmployees = async () => {
//     try {
//       const response = await fetch("http://localhost:8080/api/employee");
//       const data = await response.json();
//       setEmployees(data);
//     } catch (error) {
//       console.error("Error fetching employees:", error);
//     }
//   };

//   // Update employee
//   const handleUpdate = async (id, updatedData) => {
//     try {
//       const response = await fetch(`http://localhost:8080/api/employee/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(updatedData),
//       });
//       const updatedEmployee = await response.json();
//       setEmployees((prev) =>
//         prev.map((employee) => (employee.id === id ? updatedEmployee : employee))
//       );
//     } catch (error) {
//       console.error("Error updating employee:", error);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-lg font-bold">Add Employee</h2>
//       <div className="space-y-2">
//         <input
//           type="text"
//           name="firstName"
//           placeholder="First Name"
//           value={formData.firstName}
//           onChange={handleChange}
//           className="border p-2 w-full"
//         />
//         <input
//           type="text"
//           name="lastName"
//           placeholder="Last Name"
//           value={formData.lastName}
//           onChange={handleChange}
//           className="border p-2 w-full"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="border p-2 w-full"
//         />
//         <button
//           onClick={handleAdd}
//           className="bg-blue-500 text-white p-2 rounded w-full"
//         >
//           Add Employee
//         </button>
//       </div>

//       <h2 className="mt-6 text-lg font-bold">Manage Employees</h2>
//       <ul className="space-y-4">
//         {employees.map((employee) => (
//           <li key={employee.id} className="border p-4 rounded">
//             <div>
//               <strong>{employee.firstName} {employee.lastName}</strong>
//               <p>{employee.email}</p>
//             </div>
//             <button
//               onClick={() => handleDelete(employee.id)}
//               className="bg-red-500 text-white p-2 rounded mt-2"
//             >
//               Delete
//             </button>
//             <button
//               onClick={() => handleUpdate(employee.id, { ...employee, firstName: "Updated" })}
//               className="bg-green-500 text-white p-2 rounded mt-2"
//             >
//               Update
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Add;

// import React, { useContext, useState } from "react";
// import { EmployeeContext } from "../context/EmployeeContext";

// const Add = () => {
//   const { employees, addEmployee, updateEmployee, deleteEmployee } = useContext(EmployeeContext);

//   // Form state
//   const [formData, setFormData] = useState({ id: null, firstName: "", lastName: "", email: "" });
//   const [isEditing, setIsEditing] = useState(false); // Track if editing mode is active

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Add or Update employee
//   const handleSubmit = () => {
//     if (isEditing) {
//       updateEmployee(formData.id, formData);
//     } else {
//       addEmployee(formData);
//     }
//     // Reset form and editing mode
//     setFormData({ id: null, firstName: "", lastName: "", email: "" });
//     setIsEditing(false);
//   };

//   // Load selected employee data for editing
//   const handleEdit = (employee) => {
//     setFormData(employee);
//     setIsEditing(true);
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-lg font-bold">{isEditing ? "Edit Employee" : "Add Employee"}</h2>
//       <div className="space-y-2">
//         <input
//           type="text"
//           name="firstName"
//           placeholder="First Name"
//           value={formData.firstName}
//           onChange={handleChange}
//           className="border p-2 w-full"
//         />
//         <input
//           type="text"
//           name="lastName"
//           placeholder="Last Name"
//           value={formData.lastName}
//           onChange={handleChange}
//           className="border p-2 w-full"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="border p-2 w-full"
//         />
//         <button
//           onClick={handleSubmit}
//           className={`${
//             isEditing ? "bg-green-500" : "bg-blue-500"
//           } text-white p-2 rounded w-full`}
//         >
//           {isEditing ? "Update Employee" : "Add Employee"}
//         </button>
//         {isEditing && (
//           <button
//             onClick={() => {
//               setFormData({ id: null, firstName: "", lastName: "", email: "" });
//               setIsEditing(false);
//             }}
//             className="bg-gray-500 text-white p-2 rounded w-full mt-2"
//           >
//             Cancel
//           </button>
//         )}
//       </div>

//       <h2 className="mt-6 text-lg font-bold">Manage Employees</h2>
//       <ul className="space-y-4">
//         {employees.map((employee) => (
//           <li key={employee.id} className="border p-4 rounded flex justify-between items-center">
//             <div>
//               <strong>{employee.firstName} {employee.lastName}</strong>
//               <p>{employee.email}</p>
//             </div>
//             <div className="flex space-x-2">
//               <button
//                 onClick={() => handleEdit(employee)}
//                 className="bg-yellow-500 text-white p-2 rounded"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => deleteEmployee(employee.id)}
//                 className="bg-red-500 text-white p-2 rounded"
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Add;


// import React, { useContext, useState } from "react";
// import { EmployeeContext } from "../context/EmployeeContext";
// import { ToastContainer } from "react-toastify";

// const Add = () => {
//   const { employees, addEmployee, updateEmployee, deleteEmployee } = useContext(EmployeeContext);
//   const [newEmployee, setNewEmployee] = useState({ firstName: "", lastName: "", email: "" });
//   const [editMode, setEditMode] = useState(false);
//   const [editingEmployee, setEditingEmployee] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewEmployee((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAdd = () => {
//     if (newEmployee.firstName && newEmployee.lastName && newEmployee.email) {
//       addEmployee(newEmployee);
//       setNewEmployee({ firstName: "", lastName: "", email: "" });
//     } else {
//       toast.error("All fields are required!");
//     }
//   };

//   const handleEdit = (employee) => {
//     setEditMode(true);
//     setEditingEmployee(employee);
//     setNewEmployee(employee);
//   };

//   const handleUpdate = () => {
//     if (editingEmployee) {
//       updateEmployee(editingEmployee.id, newEmployee);
//       setEditMode(false);
//       setEditingEmployee(null);
//       setNewEmployee({ firstName: "", lastName: "", email: "" });
//     }
//   };

//   const handleDelete = (id) => {
//     deleteEmployee(id);
//   };

//   return (
//     <div>
//       <ToastContainer />
//       <h2>{editMode ? "Edit Employee" : "Add Employee"}</h2>
//       <form>
//         <input
//           name="firstName"
//           value={newEmployee.firstName}
//           onChange={handleChange}
//           placeholder="First Name"
//         />
//         <input
//           name="lastName"
//           value={newEmployee.lastName}
//           onChange={handleChange}
//           placeholder="Last Name"
//         />
//         <input
//           name="email"
//           value={newEmployee.email}
//           onChange={handleChange}
//           placeholder="Email"
//         />
//         {editMode ? (
//           <button type="button" onClick={handleUpdate}>
//             Update Employee
//           </button>
//         ) : (
//           <button type="button" onClick={handleAdd}>
//             Add Employee
//           </button>
//         )}
//       </form>

//       <h3>Employee List</h3>
//       <ul>
//         {employees.map((employee) => (
//           <li key={employee.id}>
//             <p>
//               {employee.firstName} {employee.lastName} - {employee.email}
//             </p>
//             <button onClick={() => handleEdit(employee)}>Edit</button>
//             <button onClick={() => handleDelete(employee.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Add;


// import React, { useContext, useState } from "react";
// import { EmployeeContext } from "../context/EmployeeContext";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Add = () => {
//   const { employees, addEmployee, updateEmployee, deleteEmployee } = useContext(EmployeeContext);
//   const [newEmployee, setNewEmployee] = useState({ firstName: "", lastName: "", email: "" });
//   const [editMode, setEditMode] = useState(false);
//   const [editingEmployee, setEditingEmployee] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewEmployee((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAdd = () => {
//     if (newEmployee.firstName && newEmployee.lastName && newEmployee.email) {
//       addEmployee(newEmployee);
//       setNewEmployee({ firstName: "", lastName: "", email: "" });
//       toast.success("Employee added successfully!");
//     } else {
//       toast.error("All fields are required!");
//     }
//   };

//   const handleEdit = (employee) => {
//     setEditMode(true);
//     setEditingEmployee(employee);
//     setNewEmployee(employee);
//   };

//   const handleUpdate = () => {
//     if (editingEmployee) {
//       updateEmployee(editingEmployee.id, newEmployee);
//       setEditMode(false);
//       setEditingEmployee(null);
//       setNewEmployee({ firstName: "", lastName: "", email: "" });
//       toast.success("Employee updated successfully!");
//     }
//   };

//   const handleDelete = (id) => {
//     deleteEmployee(id);
//     toast.success("Employee deleted successfully!");
//   };

//   return (
//     <div className="p-4 bg-white-100 min-h-screen">
//       <ToastContainer />
//       <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-2xl font-bold mb-4 text-center">
//           {editMode ? "Edit Employee" : "Add Employee"}
//         </h2>
//         <form className="grid grid-cols-1 gap-4">
//           <input
//             type="text"
//             name="firstName"
//             value={newEmployee.firstName}
//             onChange={handleChange}
//             placeholder="First Name"
//             className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="text"
//             name="lastName"
//             value={newEmployee.lastName}
//             onChange={handleChange}
//             placeholder="Last Name"
//             className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="email"
//             name="email"
//             value={newEmployee.email}
//             onChange={handleChange}
//             placeholder="Email"
//             className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           {editMode ? (
//             <button
//               type="button"
//               onClick={handleUpdate}
//               className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
//             >
//               Update Employee
//             </button>
//           ) : (
//             <button
//               type="button"
//               onClick={handleAdd}
//               className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition"
//             >
//               Add Employee
//             </button>
//           )}
//         </form>
//       </div>

//       <div className="mt-8">
//         <h3 className="text-2xl font-bold mb-4">Employee List</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {employees.map((employee) => (
//             <div
//               key={employee.id}
//               className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
//             >
//               <h2 className="text-xl font-semibold">
//                 {employee.firstName} {employee.lastName}
//               </h2>
//               <p className="text-gray-600">Email: {employee.email}</p>
//               <div className="flex justify-between mt-4">
//                 <button
//                   onClick={() => handleEdit(employee)}
//                   className="bg-yellow-500 text-white px-4 py-1 rounded-md hover:bg-yellow-600 transition"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(employee.id)}
//                   className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Add;


import React, { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = () => {
  const { employees, addEmployee, updateEmployee, deleteEmployee } = useContext(EmployeeContext);
  const [newEmployee, setNewEmployee] = useState({ firstName: "", lastName: "", email: "" });
  const [editMode, setEditMode] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    if (newEmployee.firstName && newEmployee.lastName && newEmployee.email) {
      addEmployee(newEmployee);
      setNewEmployee({ firstName: "", lastName: "", email: "" });
      toast.success("Employee added successfully!");
    } else {
      toast.error("All fields are required!");
    }
  };

  const handleEdit = (employee) => {
    setEditMode(true);
    setEditingEmployee(employee);
    setNewEmployee(employee);
  };

  const handleUpdate = () => {
    if (editingEmployee) {
      updateEmployee(editingEmployee.id, newEmployee);
      setEditMode(false);
      setEditingEmployee(null);
      setNewEmployee({ firstName: "", lastName: "", email: "" });
      toast.success("Employee updated successfully!");
    }
  };

  const handleDelete = (id) => {
    deleteEmployee(id);
    toast.success("Employee deleted successfully!");
  };

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 bg-white-100 min-h-screen">
      <ToastContainer />
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {editMode ? "Edit Employee" : "Add Employee"}
        </h2>
        <form className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="firstName"
            value={newEmployee.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="lastName"
            value={newEmployee.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={newEmployee.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {editMode ? (
            <button
              type="button"
              onClick={handleUpdate}
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
            >
              Update Employee
            </button>
          ) : (
            <button
              type="button"
              onClick={handleAdd}
              className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition"
            >
              Add Employee
            </button>
          )}
        </form>
      </div>
      <div className="mb-4 mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Search Employee</h2>
        <div className="max-w-2xl flex items-center justify-center mx-auto mt-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search employees by name or email..."
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Employee List</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredEmployees.map((employee) => (
            <div
              key={employee.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold">
                {employee.firstName} {employee.lastName}
              </h2>
              <p className="text-gray-600">Email: {employee.email}</p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleEdit(employee)}
                  className="bg-yellow-500 text-white px-4 py-1 rounded-md hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(employee.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Add;
