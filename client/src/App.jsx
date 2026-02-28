import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Placeholder from "./pages/Placeholder";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthProvider, useAuth } from "./context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={
          <PrivateRoute>
            <Layout>
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/explore" element={<Placeholder title="Explore Careers" />} />
                <Route path="/skills" element={<Placeholder title="My Skills" />} />
                <Route path="/jobs" element={<Placeholder title="Job Board" />} />
                <Route path="/learning" element={<Placeholder title="Learning" />} />
                <Route path="/networking" element={<Placeholder title="Networking" />} />
                <Route path="/chat" element={<Placeholder title="Chat" />} />
                <Route path="/support" element={<Placeholder title="Support Center" />} />
                <Route path="/settings" element={<Placeholder title="Settings" />} />
              </Routes>
            </Layout>
          </PrivateRoute>
        } />
      </Routes>
    </AuthProvider>
  );
};

export default App;