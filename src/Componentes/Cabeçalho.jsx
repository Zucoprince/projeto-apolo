import React, { useState } from "react";
import "../Estilos/Cabeçalho.css";

export default function Cabeçalho() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  return (
    <>
      <header className="cabeçalho">
        <div className="container_titulo">
          <img src="harpa.png" alt="Icone Apolo (Harpa)" className="imagem_cabeçalho" />
          <h1 className="titulo">Apolo</h1>
        </div>
        <div className="container_pesquisa">
          <input type="text" className="pesquisa" placeholder="O que você está procurando?" />
          <img src="direito.png" alt="Seta para realizar busca" className="seta_busca"/>
        </div>
        <div className="container_entrar">
          <button onClick={handleButtonClick} className="botao_entrar">
            Entrar
          </button>
          {showOptions && (
            <ul className="opçoes_lista">
              <li
                onClick={() => handleOptionClick("login")}
                className="opçao_item"
              >
                Login
              </li>
              <li
                onClick={() => handleOptionClick("Cadastrar-se")}
                className="opçao_item"
              >
                Cadastrar-se
              </li>
            </ul>
          )}
        </div>
      </header>
    </>
  );
}
