// Importando as dependências
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />

      <div className="main-content">
        {/* Header */}
        <div className="header">
          <div className="logo-header">
            <img src="/images/logo.png" alt="BoviCare" />
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Clique aqui para pesquisar" />
          </div>

          <div className="icons">
            <span>🛠️</span>
            <span>🔔</span>
            <span>⚙️</span>
          </div>
        </div>

        {/* Dashboard */}
        <div className="dashboard">
          {/* Saúde */}
          <section className="card">
            <h2>Saúde</h2>
            <div className="card-content">
              <div>
                <p>Gados excelente: 733</p>
                <p>Gados razoável: 15</p>
                <p>Gados em alerta: 2</p>
              </div>
              <img src="/images/cadastrargado.png" alt="Ícone Saúde" className="icon-right" />
            </div>
          </section>

          {/* Cadastrar Gado */}
          <section className="card">
            <h2>Cadastrar Gado</h2>
            <div className="card-content">
              <div>
                <p>Total cadastrado: 750</p>
                <p>Último cadastro: 325 atrás</p>
                <p>Fazenda ativa: Campo Limpo de Goiás</p>
              </div>
              <img src="/images/cadastrargado.png" alt="Ícone Cadastro" className="icon-right" />
            </div>
          </section>

          {/* Rastreamento */}
          <section className="card">
            <h2>Rastreamento</h2>
            <div className="mapa-area">
              {/* Colocando a imagem do mapa */}
              <img src="/images/mapa.png" alt="Mapa de Rastreamento" className="mapa-img" />
            </div>
          </section>

          {/* Alertas */}
          <section className="card">
            <h2>Alertas</h2>
            <ul className="alerts-list">
              <li>Boi "Otis" fugiu</li>
              <li>Boi "Ben" com saúde muito baixa (abaixo dos 80%)</li>
              <li>Fazenda "Planalto" em área de risco de incêndio</li>
              <li>Texto de exemplo de alerta longo para testar o limite.</li>
            </ul>
          </section>

          {/* Meteorologia */}
          <section className="card weather-card">
            <h2>Meteorologia</h2>
            <div className="weather-content">
              <div>
                <p>28°C</p>
                <p>Mín. 19°C, Máx. 29°C</p>
                <p>Anápolis, GO</p>
                <p>Chuvas leves e constantes durante o dia</p>
              </div>
              <div className="weather-icon animated-sun"></div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Home;
