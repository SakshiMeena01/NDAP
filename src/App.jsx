import { useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  const [isLogin, setIsLogin] = useState(true);

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
