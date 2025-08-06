import { useAuth } from "../context/AuthContext";
import { UilUserCircle } from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom"; 

const Navbar = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate("/login"); 
  };

  return (
    <div className="bg-teal-600 text-white p-4 flex justify-between items-center shadow-md">
      {/* Brand Name */}
      <h1 className="font-bold text-lg tracking-wide">HRMS Dashboard</h1>

      {/* User Info + Logout */}
      <div className="flex items-center gap-4">
        {/* User Icon + Name */}
        <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
          <UilUserCircle size={22} className="text-white" />
          <span className="font-medium">{user?.name}</span>
        </div>

        {/* Logout Button */}
        <button
        onClick={handleLogout}
        className="bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-md font-bold uppercase tracking-wide transition-colors duration-200 shadow-sm"
      >
        Logout
      </button>
      </div>
    </div>
  );
};

export default Navbar;
