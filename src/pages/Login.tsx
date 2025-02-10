import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import LoginForm from '../components/LoginForm/LoginForm';

const Login: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    console.log('Login realizado:', { email, password });
  };

  return (
    <div className="min-h-screen bg-[#242424] text-white flex flex-col items-center justify-center pt-32">
      <Navbar />
      <div className="w-full max-w-md p-6">
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default Login;