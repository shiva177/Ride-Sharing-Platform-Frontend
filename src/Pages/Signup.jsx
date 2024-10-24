import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [role, setRole] = useState('traveller'); // Default role
  const [cabNumber, setCabNumber] = useState(''); // New field for "Driver"
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [cabNumberError, setCabNumberError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSignup = () => {
    let valid = true;

    // Reset error messages
    setEmailError('');
    setUsernameError('');
    setPasswordError('');
    setPhoneError('');
    setCabNumberError('');

    // Validation for mandatory fields
    if (!email || !validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      valid = false;
    }
    if (!username) {
      setUsernameError('Username is required');
      valid = false;
    }
    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    }
    if (!phonenumber) {
      setPhoneError('Phone number is required');
      valid = false;
    }
    if (role === 'Driver' && !cabNumber) {
      setCabNumberError('Cab number is required for drivers');
      valid = false;
    }

    if (!valid) {
      return; // Stop form submission if validation fails
    }

    // Simulate saving the user data (e.g., localStorage or API)
    const userData = {
      email,
      username,
      password,
      phonenumber,
      role,
      ...(role === 'Driver' && { cabNumber }) // Add cabNumber only if the role is Driver
    };
    localStorage.setItem('user', JSON.stringify(userData));

    // Redirect based on role after signup
    if (role === 'admin') navigate('/admin');
    else if (role === 'traveller') navigate('/traveller');
    else if (role === 'Driver') navigate('/Driver');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full transform hover:scale-105 transition duration-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Your Account
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
          type="text"
          className="p-4 border border-gray-300 rounded-lg w-full mb-4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {usernameError && <p className="text-red-500 text-sm mb-4">{usernameError}</p>}

        <input
          type="password"
          className="p-4 border border-gray-300 rounded-lg w-full mb-4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p className="text-red-500 text-sm mb-4">{passwordError}</p>}

        <input
          type="text"
          className="p-4 border border-gray-300 rounded-lg w-full mb-4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="Phone Number"
          value={phonenumber}
          onChange={(e) => setPhonenumber(e.target.value)}
        />
        {phoneError && <p className="text-red-500 text-sm mb-4">{phoneError}</p>}

        <select
          className="p-4 border border-gray-300 rounded-lg w-full mb-6 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          {/* <option value="admin">Admin</option> */}
          <option value="traveller">Traveller</option>
          <option value="Driver">Driver</option>
        </select>

        {/* Conditional rendering for "Cab Number" field */}
        {role === 'Driver' && (
          <div>
            <input
              type="text"
              className="p-4 border border-gray-300 rounded-lg w-full mb-4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Cab Number"
              value={cabNumber}
              onChange={(e) => setCabNumber(e.target.value)}
            />
            {cabNumberError && <p className="text-red-500 text-sm mb-4">{cabNumberError}</p>}
          </div>
        )}

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
