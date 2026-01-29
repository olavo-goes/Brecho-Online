import { usePurchase } from "../context/PurchaseContext";
import "./Historico.css";

function Historico() {
  const { historico } = usePurchase();

  if (historico.length === 0) {
    return (
      <h2 style={{ textAlign: "center" }}>
        Nenhuma compra realizada
      </h2>
    );
  }

  return (
    <div className="historico-container">
      <h2>Histórico de Compras</h2>

      {historico.map((compra) => (
        <div key={compra.id} className="historico-card">
          <p>
            <strong>Data:</strong>{" "}
            {new Date(compra.data).toLocaleString()}
          </p>

          {compra.itens.map((item) => (
            <div key={item.id} className="historico-item">
              <span>{item.title}</span>
              <span>Qtd: {item.quantity}</span>
              <span>
                R$ {(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}

          <h4>Total: R$ {compra.total.toFixed(2)}</h4>
        </div>
      ))}
    </div>
  );
}

export default Historico;
