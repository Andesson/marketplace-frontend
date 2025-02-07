import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-content">
        <h1>Bem-vindo ao Meu Site</h1>
        <p>Escolha uma opção no menu para continuar.</p>
      </div>
    </div>
  );
};

export default Home;