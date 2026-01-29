import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { usePurchase } from "../context/PurchaseContext";
import "./Dashboard.css";

function Dashboard() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();
  const { registrarCompra } = usePurchase();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=48")
      .then((res) => res.json())
      .then((data) => {
        setProdutos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar produtos:", err);
        setLoading(false);
      });
  }, []);

  function comprarAgora(produto) {
    registrarCompra([{ ...produto, quantity: 1 }]);
    alert("Compra realizada com sucesso!");
  }

  if (loading) {
    return (
      <h2 style={{ textAlign: "center" }}>
        Carregando peças do brechó...
      </h2>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="card-grid">
        {produtos.map((produto) => (
          <div key={produto.id} className="card">
            <img
              src={produto.image}
              alt={produto.title}
              className="card-img"
            />
            <h3>{produto.title}</h3>
            <p className="preco">R$ {produto.price.toFixed(2)}</p>
            <p className="descricao">{produto.description}</p>

            <div className="card-actions">
              <button
                className="btn-carrinho"
                onClick={() => addToCart(produto)}
              >
                🛒 Adicionar ao Carrinho
              </button>

              <button
                className="btn-comprar"
                onClick={() => comprarAgora(produto)}
              >
                💳 Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
