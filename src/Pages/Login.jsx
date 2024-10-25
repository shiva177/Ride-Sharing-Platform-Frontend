import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('traveller'); // Default role
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    // Simple email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setEmailError(''); // Clear any previous errors

    var myLoginData = {
      "email": email,
      "password": password
    };

    const res = await axios.post('http://localhost:8123/users/login', myLoginData);
    // console.log(res);

    if (res.status == 200) {
      localStorage.setItem('loggedIn', true);
      localStorage.setItem('role', res.data.role);
      var role = res.data.role;

      if (role == 'ADMIN') navigate('/admin');
      else if (role == 'TRAVELER') navigate('/traveller');
      else if (role == 'DRIVER') navigate('/traveller-companion');
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
          type="email"
          className="p-4 border border-gray-300 rounded-lg w-full mb-4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className="text-red-500 text-sm mb-4">{emailError}</p>}

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
          Dont have an account?{' '}
          <a href="/signup" className="text-indigo-600 hover:underline">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
