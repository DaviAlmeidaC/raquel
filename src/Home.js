import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h2 className="home-title">
        Encontre Um Lugar<br/>Para Estacionar
      </h2>

      <button
        className="achar-vaga-btn"
        onClick={() => navigate('/vagas')}
      >
        <img
          src="/Carro branco 1.png"
          alt="Ícone de carro"
          className="icon-carro"
        />
        <span className="btn-text">achar vaga</span>
      </button>

      <img
        src="/image 4.png"
        alt="Carro"
        className="carro-img"
      />
    </div>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h2 className="home-title">
        Encontre Um Lugar<br/>Para Estacionar
      </h2>

      <button
        className="achar-vaga-btn"
        onClick={() => navigate('/vagas')}
      >
        <img
          src="/carro-icon.png"
          alt="Ícone de carro"
          className="icon-carro"
        />
        <span className="btn-text">achar vaga</span>
      </button>

      <img
        src="/carro.png"
        alt="Carro"
        className="carro-img"
      />
    </div>
  );
}
