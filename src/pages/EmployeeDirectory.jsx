import { useState, useEffect } from "react";
import { UilPlus, UilTimes, UilEdit, UilTrash } from "@iconscout/react-unicons";
import employeesData from "../assets/employees.json";

const EmployeeDirectory = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [newEmp, setNewEmp] = useState({
    name: "",
    email: "",
    department: "",
    role: "",
    status: "Active"
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setEmployees(employeesData);
  }, []);

  const handleAdd = () => {
    if (!newEmp.name || !newEmp.email) return alert("Name and Email are required");
    setEmployees([...employees, newEmp]);
    setNewEmp({ name: "", email: "", department: "", role: "", status: "Active" });
    setShowForm(false); // close form
  };

  const handleDelete = (index) => {
    setEmployees(employees.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setNewEmp(employees[index]);
    setShowForm(true); // open form for editing
  };

  const handleUpdate = () => {
    const updated = [...employees];
    updated[editingIndex] = newEmp;
    setEmployees(updated);
    setEditingIndex(null);
    setNewEmp({ name: "", email: "", department: "", role: "", status: "Active" });
    setShowForm(false); // close form
  };

  const filtered = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase()) ||
    emp.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-bold mb-4">Employee Directory</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 mb-4 w-full sm:w-64 rounded-md focus:ring-2 focus:ring-emerald-400 outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Toggle Form Button */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full flex items-center gap-2 mb-4 shadow-md transition-colors duration-200"
      >
        {showForm ? <UilTimes size={18} /> : <UilPlus size={18} />}
        {showForm ? "Cancel" : "Add New Employee"}
      </button>

      {/* Add / Edit Form */}
      {showForm && (
        <div className="bg-white p-5 rounded-lg shadow-lg border border-gray-200 mb-4">
          <div className="grid gap-3 sm:grid-cols-5 mt-2">
            <input
              type="text"
              placeholder="Name"
              value={newEmp.name}
              onChange={(e) =>
                setNewEmp({ ...newEmp, name: e.target.value })
              }
              className="border p-2 rounded-md focus:ring-2 focus:ring-emerald-400 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={newEmp.email}
              onChange={(e) =>
                setNewEmp({ ...newEmp, email: e.target.value })
              }
              className="border p-2 rounded-md focus:ring-2 focus:ring-emerald-400 outline-none"
            />
            <input
              type="text"
              placeholder="Department"
              value={newEmp.department}
              onChange={(e) =>
                setNewEmp({ ...newEmp, department: e.target.value })
              }
              className="border p-2 rounded-md focus:ring-2 focus:ring-emerald-400 outline-none"
            />
            <input
              type="text"
              placeholder="Role"
              value={newEmp.role}
              onChange={(e) =>
                setNewEmp({ ...newEmp, role: e.target.value })
              }
              className="border p-2 rounded-md focus:ring-2 focus:ring-emerald-400 outline-none"
            />
            <select
              value={newEmp.status}
              onChange={(e) =>
                setNewEmp({ ...newEmp, status: e.target.value })
              }
              className="border p-2 rounded-md focus:ring-2 focus:ring-emerald-400 outline-none"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* Add / Update Button */}
          {editingIndex !== null ? (
            <button
              onClick={handleUpdate}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full mt-4 shadow-md"
            >
              Update Employee
            </button>
          ) : (
            <button
              onClick={handleAdd}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full mt-4 shadow-md"
            >
              Add Employee
            </button>
          )}
        </div>
      )}

      {/* Employee Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg shadow-lg overflow-hidden text-sm sm:text-base">
          <thead>
            <tr className="bg-teal-600 text-white">
              <th className="py-3 px-4 text-center">Name</th>
              <th className="py-3 px-4 text-center">Email</th>
              <th className="py-3 px-4 text-center">Department</th>
              <th className="py-3 px-4 text-center">Role</th>
              <th className="py-3 px-4 text-center">Status</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((emp, i) => (
              <tr
                key={i}
                className={`border-b transition-colors duration-200 hover:bg-emerald-50 ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="text-center py-2 px-4 font-medium text-gray-700">
                  {emp.name}
                </td>
                <td className="text-center py-2 px-4 text-gray-600">
                  {emp.email}
                </td>
                <td className="text-center py-2 px-4 text-gray-600">
                  {emp.department}
                </td>
                <td className="text-center py-2 px-4 text-gray-600">
                  {emp.role}
                </td>
                <td className="text-center py-2 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      emp.status === "Active"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {emp.status}
                  </span>
                </td>
                <td className="flex justify-center gap-2 py-2 px-4">
                  <button
                    onClick={() => handleEdit(i)}
                    className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded-full flex items-center gap-1 transition-colors duration-200"
                  >
                    <UilEdit size="16" /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(i)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full flex items-center gap-1 transition-colors duration-200"
                  >
                    <UilTrash size="16" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeDirectory;
