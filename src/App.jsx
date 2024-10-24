import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminPage from "./pages/AdminPage";
import TravellerPage from "./pages/TravellerPage";
import TravellerCompanionPage from "./pages/TravellerCompanionPage";
import ProtectedRoute from "./components/ProtectedRoute";

import PublicRoute from './components/PublicRoute'; // Add this import

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* Redirect logged-in users from login/signup */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/traveller"
          element={
            <ProtectedRoute role="traveller">
              <TravellerPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/traveller-companion"
          element={
            <ProtectedRoute role="traveller-companion">
              <TravellerCompanionPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
