import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { UilUser, UilClipboardAlt, UilUserCircle, UilRobot } from "@iconscout/react-unicons";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: "/dashboard/employees", icon: <UilUser size={24} />, label: "Employee Directory" },
    { path: "/dashboard/leaves", icon: <UilClipboardAlt size={24} />, label: "Leave Requests" },
    { path: "/dashboard/profile", icon: <UilUserCircle size={24} />, label: "Profile" },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="bg-gray-100 p-2 md:hidden flex justify-between items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          {isOpen ? "Close Menu" : "Open Menu"}
        </button>
      
      </div>

      {/* Sidebar */}
      <div
  className={`bg-white shadow-lg w-auto p-1 fixed h-full md:static md:block transition-transform transform ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  } md:translate-x-0`}
      >
       
        {/* Navigation */}
        <nav className="flex flex-col gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
                className={`flex flex-col items-center gap-1 justify-center p-2 rounded-md transition-colors duration-200 ${
                    location.pathname === item.path
                    ? "bg-teal-500 text-white"
                    : "hover:bg-blue-100"
                }`}
            >
              {item.icon}
              <span className="text-sm text-center">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
