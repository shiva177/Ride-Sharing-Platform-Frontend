import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
  const loggedIn = localStorage.getItem('loggedIn');
  const userRole = localStorage.getItem('role');

  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (role && userRole !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
