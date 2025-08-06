import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fakeLogin } from "../dummyAuth";
import { useAuth } from "../context/AuthContext";
import { UilUser, UilLock } from "@iconscout/react-unicons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await fakeLogin(email, password);
    if (user) {
      login(user);
      navigate("/dashboard/employees");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
    className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-500 via-emerald-500 to-green-400"
  >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-2xl w-[400px] sm:w-[450px]"
      >
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 flex items-center justify-center gap-3">
          <UilUser size={36} className="text-gray-800" />
          HRMS Login
        </h2>

        {/* Email Input */}
        <div className="flex items-center border rounded-lg mb-4 px-3 py-2 focus-within:ring-2 focus-within:ring-teal-400">
          <UilUser size={24} className="text-gray-500" />
          <input
            type="email"
            placeholder="Email"
            className="w-full ml-3 outline-none text-lg py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="flex items-center border rounded-lg mb-6 px-3 py-2 focus-within:ring-2 focus-within:ring-teal-400">
          <UilLock size={24} className="text-gray-500" />
          <input
            type="password"
            placeholder="Password"
            className="w-full ml-3 outline-none text-lg py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-700 text-white w-full py-3 rounded-lg text-lg font-semibold transition duration-200 shadow-md"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
