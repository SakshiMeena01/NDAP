import { useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/dashboard';


function App() {
  const [isLogin, setIsLogin] = useState(true);
  return <Dashboard />;

  return (
    <>
      {isLogin ? (
        <Login switchToSignup={() => setIsLogin(false)} />
      ) : (
        <Signup switchToLogin={() => setIsLogin(true)} />
      )}
    </>
  );
}

export default App;
