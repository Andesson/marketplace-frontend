import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../services/signupService';

const SignupForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    setIsLoading(true);
    try {
      await signup({ name, email, password });
      navigate('/login', { state: { successMessage: 'Registration successful! Please log in.' } });
      console.log('Registration successful!');
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.');
      }
      console.error('Erro no cadastro:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#201192] p-8 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Cadastro</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Nome:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded bg-[#ffffff1a] text-white"
          />
        </div>
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
          className="w-full bg-[#593ec5] text-white py-2 rounded hover:bg-[#7654de] transition-colors flex justify-center items-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
          ) : (
            'Cadastrar'
          )}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;