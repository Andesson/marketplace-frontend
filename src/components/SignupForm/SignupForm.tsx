import React, { useState } from 'react';

interface SignupFormProps {
  onSignup: (name: string, email: string, password: string) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSignup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      const urlBackend = import.meta.env.VITE_BACKEND_URL as string;
      const response = await fetch(urlBackend+"/auth-service/v1/auth/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        onSignup(name, email, password);
        console.log('Cadastro realizado com sucesso:', data);
      } else {
        setError(data.message || 'Erro ao cadastrar.');
      }
    } catch (error) {
      console.error('Erro ao enviar dados para o backend:', error);
      setError('Erro ao conectar com o servidor.');
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