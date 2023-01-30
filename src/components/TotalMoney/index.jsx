import "./index.css";

const TotalMoney = ({ listaValores }) => {
  function saldo() {
    const valorTotal = listaValores.reduce((valorAnterior, valorAtual) => {
      if (valorAtual.tipo === "Despesa") {
        return valorAnterior - valorAtual.valor;
      } else {
        return valorAnterior + valorAtual.valor;
      }
    }, 0);
    return valorTotal;
  }

  return (
    <div className="div__total">
      <div>
        <h3>Valor Total:</h3>
        <span>R$ {saldo().toFixed(2)}</span>
      </div>
      <p>Valor se refere ao saldo</p>
    </div>
  );
};

export default TotalMoney;
