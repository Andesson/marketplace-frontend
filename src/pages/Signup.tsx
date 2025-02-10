import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import SignupForm from '../components/SignupForm/SignupForm';

const Signup: React.FC = () => {
  const handleSignup = (name: string, email: string, password: string) => {
    console.log('Cadastro realizado:', { name, email, password });
  };

  return (
    <div className="min-h-screen bg-[#242424] text-white flex flex-col items-center justify-center pt-32">
      <Navbar />
      <div className="w-full max-w-md p-6">
        <SignupForm onSignup={handleSignup} />
      </div>
    </div>
  );
};

export default Signup;