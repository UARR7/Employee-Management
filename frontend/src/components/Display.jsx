

import React, { useEffect, useState } from "react";

const Display = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/employee");
        if (!response.ok) {
          throw new Error("Failed to fetch employee data.");
        }
        const data = await response.json();
        setEmployees(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //testing
  //mass
  //mass
  //mass
  if (loading) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  }
  //hello
//hello
  if (error) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold text-red-500">Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Records & Details</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
