import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleRegisterCattleClick = () => {
    navigate('/register-cattle');
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="content">
        {/* Seção Cadastrar Gado */}
        <section className="register-cattle">
          <h2>Cadastrar Gado</h2>
          <p>Total cadastrado: 0</p>
          <p>Último cadastro: 0s atrás</p>
          <p>Fazenda ativa: Fazenda</p>
          <img 
            src="/public/imagem-cadastrar-gado.png" 
            alt="Cadastrar Gado" 
            className="cadastrar-gado-img"
            onClick={handleRegisterCattleClick}
          />
        </section>
        <section className="register-cattle">
          <h2>Saude</h2>
          <p>Total cadastrado: 0</p>
          <p>Último cadastro: 0s atrás</p>
          <p>Fazenda ativa: Fazenda</p>
          <img 
            src="/public/imagem-cadastrar-gado.png" 
            alt="Cadastrar Gado" 
            className="cadastrar-gado-img"
            onClick={handleRegisterCattleClick}
          />
        </section>
        
        <section className="tracking">
          <h2>Rastreamento</h2>
          <img src="imagens/Widget Rastreio.png" alt="Rastreamento" />
          <div className="map">
            {/* Adicione o mapa aqui */}
          </div>
        </section>
        {/* Seção Alertas */}
        <section className="alerts">
          <h2>Alertas</h2>
          <ul>
            <li>Boi "Otis" fugiu</li>
            <li>Boi "Ben" está com a saúde muito baixa (abaixo dos 80% recomendados)</li>
            <li>Fazenda "UniEVANGÉLICA" está em uma área de perigo de incêndios</li>
            <li>Este alerta é grande demais para caber na tela, mas se fizermos testes ele ainda vai aparecer corretamente...</li>
          </ul>
          <div>
          <section className="weather">
          <h2>Meteorologia</h2>
          <p>28 °C</p>
          <p>Mín. 19 °C, Máx. 29 °C</p>
          <p>Anápolis, GO</p>
          <p>Chuvas leves e constantes durante todo o dia</p>
        </section>
        </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
