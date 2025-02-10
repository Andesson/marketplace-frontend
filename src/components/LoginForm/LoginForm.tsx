import React, { useState } from 'react';
import GoogleLoginButton from './GoogleLoginButton';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    setError('');
    onLogin(email, password);
  };

  return (
    <div className="bg-[#201192] p-8 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-[#ffffff1a] text-white"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2">
            Senha:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-[#ffffff1a] text-white"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#593ec5] text-white py-2 rounded hover:bg-[#7654de] transition-colors"
        >
          Entrar
        </button>
      </form>
      <div className="mt-6">
        <GoogleLoginButton />
      </div>
    </div>
  );
};

export default LoginForm;