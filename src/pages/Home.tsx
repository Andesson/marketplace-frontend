import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#242424] text-white flex flex-col items-center justify-center pt-32">
      <Navbar />
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#646cff]">Bem-vindo ao Meu Site</h1>
        <p className="mt-4 text-lg text-[#ffffffcc]">
          Escolha uma opção no menu para continuar.
        </p>
      </div>
    </div>
  );
};

export default Home;