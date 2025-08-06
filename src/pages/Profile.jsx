import { useAuth } from "../context/AuthContext";
import { UilUser, UilEnvelope, UilBriefcase, UilUserSquare } from '@iconscout/react-unicons';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="flex justify-center items-center min-h-[70vh] bg-gray-50 overflow-hidden p-2">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center text-emerald-600">My Profile</h2>

        {/* Name */}
        <div className="flex items-center gap-3 py-2 border-b border-gray-100">
          <UilUser size={24} className="text-emerald-500" />
          <p className="font-bold text-gray-800">{user?.name}</p>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3 py-2 border-b border-gray-100">
          <UilEnvelope size={24} className="text-emerald-500" />
          <p className="font-bold text-gray-800">{user?.email}</p>
        </div>

        {/* Department */}
        <div className="flex items-center gap-3 py-2 border-b border-gray-100">
          <UilBriefcase size={24} className="text-emerald-500" />
          <p className="font-bold text-gray-800">{user?.department}</p>
        </div>

        {/* Role */}
        <div className="flex items-center gap-3 py-2">
          <UilUserSquare size={24} className="text-emerald-500" />
          <p className="font-bold text-gray-800">{user?.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
