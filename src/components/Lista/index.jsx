import { BsFillTrashFill } from "react-icons/bs";
import Card from "../Card";
import "./index.css";

const Lista = ({ listaValores, isFiltrados, remover, filtroEntrada }) => {
  return (
    <>
      <div className="div__lista">
        <div>
          <h3>Resumo financeiro</h3>
          <div>
            <button onClick={() => filtroEntrada("Todos")}>Todos</button>
            <button onClick={() => filtroEntrada("Entrada")}>Entradas</button>
            <button onClick={() => filtroEntrada("Despesa")}>Despesas</button>
          </div>
        </div>
      </div>
      <ul>
        {isFiltrados.length > 0 ? (
          <Card array={isFiltrados} remover={remover} />
        ) : (
          <Card array={listaValores} remover={remover} />
        )}
      </ul>
    </>
  );
};

export default Lista;
