import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('traveller'); // Default role
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mock authentication
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password && storedUser.role === role) {
      localStorage.setItem('loggedIn', true);
      localStorage.setItem('role', role);

      if (role === 'admin') navigate('/admin');
      else if (role === 'traveller') navigate('/traveller');
      else if (role === 'traveller-companion') navigate('/traveller-companion');
    } else {
      alert('Invalid credentials or role mismatch!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full transform hover:scale-105 transition duration-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          LogIn to your Account
        </h2>

        <input
          type="text"
          className="p-4 border border-gray-300 rounded-lg w-full mb-4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="UserId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <input
          type="email"
          className="p-4 border border-gray-300 rounded-lg w-full mb-4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          onClick={handleLogin}
          className="bg-blue-600 text-white p-4 rounded-lg w-full hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{' '}
          <a href="/signup" className="text-indigo-600 hover:underline">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
