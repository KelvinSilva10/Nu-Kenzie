import { useState } from "react";
import "./index.css";

const Header = ({ Logout }) => {
  return (
    <header>
      <div>
        <h2>
          <span>Nu</span> Kenzie
        </h2>
        <button onClick={() => Logout()}>Início</button>
      </div>
    </header>
  );
};

export default Header;
