import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import LoginForm from '../components/LoginForm/LoginForm';

const Login: React.FC = () => {
  const location = useLocation();
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (location.state?.successMessage) {
      setSuccessMessage(location.state.successMessage);
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  const handleLogin = (email: string, password: string) => {
    console.log('Login realizado:', { email, password });
  };

  return (
    <div className="min-h-screen bg-[#242424] text-white flex flex-col items-center justify-center pt-32">
      <Navbar />
      <div className="w-full max-w-md p-6">
        {successMessage && (
          <div className="bg-green-500 text-white p-4 rounded mb-4 text-center">
            {successMessage}
          </div>
        )}
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default Login;