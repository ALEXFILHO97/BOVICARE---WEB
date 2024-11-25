import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import Navbar from '../../components/Navbar/Navbar';
import { AiFillAlert } from 'react-icons/ai'; // Ícone de alerta
import './Home.css';

const Home = () => {
  const navigate = useNavigate(); // Usar o hook useNavigate

  const handleRegisterCattleClick = () => {
    navigate('/register-cattle'); // Navegar para a página register-gado
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="content">
        {/* Seção Saúde e Cadastrar Gado */}
        <div className="top-row">
          {/* Quadrado Azul - Saúde */}
          <div className="square health">
            <div className="text-container">
              <h1>Saúde</h1>
              <p>
                A saúde é um estado de completo bem-estar físico, mental e social,
                e não apenas a ausência de doença ou enfermidade.
              </p>
            </div>
            <img src="./images/Cadastro.png" alt="Imagem de Saúde" />
          </div>

          {/* Quadrado - Cadastrar Gado */}
          <div className="square register-cattle" onClick={handleRegisterCattleClick}>
            <div className="text-container">
              <h1>Cadastrar Gado</h1>
              <img src="./images/Cadastro.png" alt="Imagem de Cadastrar Gado" className="square-image"/>
            </div>
          </div>
        </div>

        {/* Seção Rastreamento e Alertas */}
        <div className="bottom-row">
          {/* Quadrado Vermelho - Rastreamento */}
          <div className="square tracking">
            <h1>Rastreamento</h1>
            <p>Informações sobre o rastreamento de gado.</p>
          </div>

          {/* Quadrado Cinza - Alertas */}
          <div className="square alerts">
            <h1>Alertas</h1>
            <AiFillAlert className="icon" />
            <p>Receba alertas sobre a saúde do gado e outros eventos.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;