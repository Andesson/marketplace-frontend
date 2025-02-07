import React from 'react';
import Navbar from '../components/Navbar';
import SignupForm from '../components/SignupForm';
import './Signup.css';

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL as string;

const Signup: React.FC = () => {
  const handleSignup = async (name: string, email: string, password: string) => {
    try {
      const response = await fetch(VITE_BACKEND_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar usuário');
      }

      const data = await response.json();
      console.log('Cadastro realizado com sucesso:', data);
    } catch (error) {
      console.error('Erro no cadastro:', error);
    }
  };

  return (
    <div className="signup">
      <Navbar />
      <div className="signup-content">
        <SignupForm onSignup={handleSignup} />
      </div>
    </div>
  );
};

export default Signup;
