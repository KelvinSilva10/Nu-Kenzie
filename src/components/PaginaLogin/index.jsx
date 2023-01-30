import { useState } from "react";
import "./index.css";
import illustration from "./assets/illustration.svg";

const PaginaLogin = ({ isLoggedIn, Login, children }) => {
  return (
    <>
      {!isLoggedIn ? (
        <div className="div__login">
          <div className="container">
            <div>
              <h2>
                <span>Nu</span> Kenzie
              </h2>
              <p>Centralize o controle das suas finanças</p>
              <span className="span__iniciar">de forma rápida e segura</span>
              <button className="brn__iniciar" onClick={() => Login()}>
                Iniciar
              </button>
            </div>
            <figure>
              <img src={illustration} alt="" />
            </figure>
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default PaginaLogin;
