import { useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/dashboard';
import Codespace from './components/codespace';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // Is user logged in?
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Should we show login or signup form?
  const [showLogin, setShowLogin] = useState(false);

   // Debug line: place it right after your hooks
  console.log("isAuthenticated", isAuthenticated, "showLogin", showLogin);


  // 1. Show signup or login form until authentication
  if (!isAuthenticated) {
    return showLogin ? (
        <Login
          onLogin={() => setIsAuthenticated(true)}
          onBackToSignup={() => setShowLogin(false)}
        />
      ) : (
        <Signup
          onSignup={() => setShowLogin(true)}
          switchToLogin={() => setShowLogin(true)}
        />
      
    );
  }

  // 2. When authenticated, show main app with routes
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard onLogout={() => setIsAuthenticated(false)} />} />
        <Route path="/codespace" element={<Codespace onLogout={() => setIsAuthenticated(false)} />} />
      </Routes>
    </Router>
  );
}
export default App;
