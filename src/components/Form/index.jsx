import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import "./index.css";

const Form = ({ addMovimentacao }) => {
  const [descricaoInput, setDescricao] = useState("");
  const [valorInput, setValor] = useState("");
  const [tipoValor, setTipo] = useState("");

  function zerarInputs() {
    setValor("");
    setDescricao("");
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addMovimentacao(descricaoInput, valorInput, tipoValor);
        zerarInputs();
      }}
    >
      <label htmlFor="idDescricao">Descrição</label>
      <input
        type="text"
        id="idDescricao"
        placeholder="Digite aqui sua descrição"
        value={descricaoInput}
        onChange={(event) => setDescricao(event.target.value)}
        required
      />
      <span>Ex: Compra de roupas</span>
      <div>
        <div>
          <label htmlFor="idValor">Valor</label>
          <div className="div__input">
            <input
              type="number"
              id="idValor"
              value={valorInput}
              onChange={(event) => setValor(event.target.value)}
              placeholder="1.00"
              required
            />
            <span>R$</span>
          </div>
        </div>
        <div>
          <label htmlFor="idTipo">Tipo de Valor</label>
          <select
            name=""
            id="idTipo"
            value={tipoValor}
            required
            onChange={(event) => setTipo(event.target.value)}
          >
            <option value="">Selecione</option>
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesas</option>
          </select>
        </div>
      </div>
      <button type="submit">Inserir Valor</button>
    </form>
  );
};

export default Form;
