import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import PaginaLogin from "./components/PaginaLogin";
import Header from "./components/Header";
import { useState } from "react";
import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";
import Lista from "./components/Lista";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [listaValores, setListaValores] = useState([]);
  const [isFiltrados, setIsFiltrados] = useState([]);
  const [idCard, setIdCard] = useState(0);

  

  function Login() {
    setIsLoggedIn(true);
  }

  function Logout() {
    setIsLoggedIn(false);
  }

  function addMovimentacao(descricao, valor, tipo) {
    const movimentacao = {
      descricao: descricao.trim(),
      valor: Number(valor),
      tipo: tipo,
      id: idCard,
    };

    setIdCard(idCard + 1);

    setListaValores([...listaValores, movimentacao]);

    if (isFiltrados.length > 0) {
      if (isFiltrados[0].tipo == tipo) {
        setIsFiltrados([...isFiltrados, movimentacao]);
      }
    }
  }

  function filtroEntrada(tipo) {
    if (tipo === "Todos") {
      return setIsFiltrados([]);
    }

    const itensFiltrados = listaValores.filter(
      (element) => element.tipo === tipo
    );

    if (itensFiltrados.length == 0) {
      return setIsFiltrados([""]);
    }

    setIsFiltrados(itensFiltrados);
  }

  function remover(itemRemover) {
    const itensFiltrados = listaValores.filter(
      (element) => element.id !== itemRemover
    );

    setListaValores(itensFiltrados);
    setIsFiltrados(itensFiltrados);
  }

  return (
    <PaginaLogin isLoggedIn={isLoggedIn} Login={Login}>
      <Header Logout={Logout} />
      <main>
        <section>
          <Form addMovimentacao={addMovimentacao} />
          <TotalMoney listaValores={listaValores} />
        </section>
        <section>
          <Lista
            listaValores={listaValores}
            isFiltrados={isFiltrados}
            remover={remover}
            filtroEntrada={filtroEntrada}
          />
        </section>
      </main>
    </PaginaLogin>
  );
}

export default App;
