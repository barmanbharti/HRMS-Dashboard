import { useState, useEffect } from "react";
import leavesData from "../assets/leaves.json";
import { UilPlus, UilTimes, UilEdit, UilTrash } from '@iconscout/react-unicons';

const LeaveRequests = () => {
  const [leaves, setLeaves] = useState([]);
  const [newLeave, setNewLeave] = useState({
    employee: "",
    type: "",
    dates: "",
    status: "Pending"
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setLeaves(leavesData);
  }, []);

  const handleAdd = () => {
    if (!newLeave.employee || !newLeave.type || !newLeave.dates) {
      return alert("Please fill all fields");
    }
    setLeaves([...leaves, newLeave]);
    setNewLeave({ employee: "", type: "", dates: "", status: "Pending" });
    setShowForm(false);
  };

  const handleDelete = (index) => {
    setLeaves(leaves.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setNewLeave(leaves[index]);
    setShowForm(true);
  };

  const handleUpdate = () => {
    const updated = [...leaves];
    updated[editingIndex] = newLeave;
    setLeaves(updated);
    setEditingIndex(null);
    setNewLeave({ employee: "", type: "", dates: "", status: "Pending" });
    setShowForm(false);
  };

  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-bold mb-4">Leave Requests</h2>

      {/* Toggle Form Button */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full flex items-center gap-2 mb-4 shadow-md transition-colors duration-200"
      >
        {showForm ? <UilTimes size={18} /> : <UilPlus size={18} />}
        {showForm ? "Cancel" : "Add New Leave"}
      </button>

      {/* Add / Edit Form */}
      {showForm && (
        <div className="bg-white p-5 rounded-lg shadow-lg border border-gray-200 mb-4">
          <div className="grid gap-3 sm:grid-cols-4 mt-2">
            <input
              type="text"
              placeholder="Employee"
              value={newLeave.employee}
              onChange={(e) =>
                setNewLeave({ ...newLeave, employee: e.target.value })
              }
              className="border p-2 rounded-md focus:ring-2 focus:ring-emerald-400 outline-none"
            />
            <input
              type="text"
              placeholder="Leave Type"
              value={newLeave.type}
              onChange={(e) =>
                setNewLeave({ ...newLeave, type: e.target.value })
              }
              className="border p-2 rounded-md focus:ring-2 focus:ring-emerald-400 outline-none"
            />
            <input
              type="text"
              placeholder="Dates"
              value={newLeave.dates}
              onChange={(e) =>
                setNewLeave({ ...newLeave, dates: e.target.value })
              }
              className="border p-2 rounded-md focus:ring-2 focus:ring-emerald-400 outline-none"
            />
            <select
              value={newLeave.status}
              onChange={(e) =>
                setNewLeave({ ...newLeave, status: e.target.value })
              }
              className="border p-2 rounded-md focus:ring-2 focus:ring-emerald-400 outline-none"
            >
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
          </div>

          {/* Add / Update Button */}
          {editingIndex !== null ? (
            <button
              onClick={handleUpdate}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full mt-4 shadow-md"
            >
              Update Leave
            </button>
          ) : (
            <button
              onClick={handleAdd}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full mt-4 shadow-md"
            >
              Add Leave
            </button>
          )}
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg shadow-lg overflow-hidden text-sm sm:text-base">
          <thead>
            <tr className="bg-teal-600 text-white">
              <th className="py-3 px-4 text-center">Employee</th>
              <th className="py-3 px-4 text-center">Leave Type</th>
              <th className="py-3 px-4 text-center">Dates</th>
              <th className="py-3 px-4 text-center">Status</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave, i) => (
              <tr
                key={i}
                className={`border-b transition-colors duration-200 hover:bg-emerald-50 ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="text-center py-2 px-4 font-medium text-gray-700">
                  {leave.employee}
                </td>
                <td className="text-center py-2 px-4 text-gray-600">
                  {leave.type}
                </td>
                <td className="text-center py-2 px-4 text-gray-600">
                  {leave.dates}
                </td>
                <td className="text-center py-2 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      leave.status === "Approved"
                        ? "bg-emerald-100 text-emerald-700"
                        : leave.status === "Pending"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {leave.status}
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

export default LeaveRequests;
