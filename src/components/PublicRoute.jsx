import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn) {
      // Redirect logged-in users to the appropriate page based on their role
      const role = localStorage.getItem('role');
      if (role === 'admin') navigate('/admin');
      else if (role === 'traveller') navigate('/traveller');
      else if (role === 'traveller-companion') navigate('/traveller-companion');
    }
  }, [navigate]);

  return children;
};

export default PublicRoute;
