import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('loggedIn');
    const userRole = localStorage.getItem('role');

    if (loggedInStatus) {
      setIsLoggedIn(true);
      setRole(userRole);
    } else {
      setIsLoggedIn(false);
      setRole('');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setRole('');
    navigate('/login');
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-extrabold text-2xl tracking-wide cursor-pointer hover:scale-105 transition-transform duration-300">
          TRAVELLER APP
        </h1>
        <div className="space-x-6 flex items-center">
          <Link
            to="/"
            className="text-white font-medium text-lg hover:text-indigo-200 transition duration-300"
          >
            Home
          </Link>

          {!isLoggedIn && (
            <>
              <Link
                to="/login"
                className="bg-white text-blue-600 font-medium text-lg px-4 py-2 rounded-lg shadow-md hover:bg-indigo-100 transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-white text-blue-600 font-medium text-lg px-4 py-2 rounded-lg shadow-md hover:bg-indigo-100 transition duration-300"
              >
                Signup
              </Link>
            </>
          )}

          {isLoggedIn && (
            <>
              <span className="text-white font-medium text-lg">
                {role === 'admin' ? 'Admin' : role === 'traveller' ? 'Traveller' : 'Companion'}
              </span>
              <button
                onClick={handleLogout}
                className="bg-white text-blue-600 font-medium text-lg px-4 py-2 rounded-lg shadow-md hover:bg-indigo-100 transition duration-300"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
