import { BsFillTrashFill } from "react-icons/bs";

const Card = ({ array, remover }) => {
  return (
    <>
      {array.length > 0 && array[0] != "" ? (
        array.map((element, index) => (
          <li
            key={index}
            className={
              element.tipo === "Entrada" ? "li__entrada" : "li__despesa"
            }
          >
            <div>
              <h4>{element.descricao}</h4>
              <p>{element.tipo}</p>
            </div>
            <span>R$ {element.valor.toFixed(2)}</span>
            <button id={element.id} onClick={() => remover(element.id)}>
              <BsFillTrashFill />
            </button>
          </li>
        ))
      ) : (
        <div className="lista__vazia">
          <h4 className="descricao__vazia">
            Você ainda não possui nenhum lançamento
          </h4>
          <li className="li__vazia">
            <div className="div__vazia"></div>
          </li>
          <li className="li__vazia">
            <div className="div__vazia"></div>
          </li>
          <li className="li__vazia">
            <div className="div__vazia"></div>
          </li>
        </div>
      )}
    </>
  );
};

export default Card;
