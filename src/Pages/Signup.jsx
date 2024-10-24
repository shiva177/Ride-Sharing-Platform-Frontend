import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('traveller'); // Default role
  const navigate = useNavigate();

  const handleSignup = () => {
    // Simulate saving the user data (e.g., localStorage or API)
    const userData = { username, password, role };
    localStorage.setItem('user', JSON.stringify(userData));

    // Redirect based on role after signup
    if (role === 'admin') navigate('/admin');
    else if (role === 'traveller') navigate('/traveller');
    else if (role === 'traveller-companion') navigate('/traveller-companion');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full transform hover:scale-105 transition duration-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Your Account
        </h2>

        <input
          type="text"
          className="p-4 border border-gray-300 rounded-lg w-full mb-4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="p-4 border border-gray-300 rounded-lg w-full mb-4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          className="p-4 border border-gray-300 rounded-lg w-full mb-6 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="admin">Admin</option>
          <option value="traveller">Traveller</option>
          <option value="traveller-companion">Traveller Companion</option>
        </select>

        <button
          onClick={handleSignup}
          className="bg-blue-600 text-white p-4 rounded-lg w-full hover:bg-blue-700 transition duration-300"
        >
          Signup
        </button>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-indigo-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
