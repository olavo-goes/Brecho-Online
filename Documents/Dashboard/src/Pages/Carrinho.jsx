import { useCart } from "../context/CartContext";
import { usePurchase } from "../context/PurchaseContext";
import "./Carrinho.css";

function Carrinho() {
  const { cart, removeFromCart, clearCart, getTotal } = useCart();
  const { registrarCompra } = usePurchase();

  function comprarItem(item) {
    registrarCompra([{ ...item }]);
    removeFromCart(item.id);
    alert("Compra do item realizada com sucesso!");
  }

  function finalizarCarrinho() {
    registrarCompra(cart);
    clearCart();
    alert("Compra do carrinho finalizada com sucesso!");
  }

  if (cart.length === 0) {
    return (
      <h2 style={{ textAlign: "center" }}>
        Seu carrinho está vazio 🛒
      </h2>
    );
  }

  return (
    <div className="carrinho-container">
      <h2>Seu Carrinho</h2>

      {cart.map((item) => (
        <div key={item.id} className="carrinho-item">
          <img src={item.image} alt={item.title} />

          <div className="carrinho-info">
            <h4>{item.title}</h4>
            <p>Qtd: {item.quantity}</p>
            <p>R$ {(item.price * item.quantity).toFixed(2)}</p>
          </div>

          <div className="carrinho-botoes">
            <button
              className="btn-comprar-item"
              onClick={() => comprarItem(item)}
            >
              💳 Comprar este item
            </button>

            <button
              className="btn-remover"
              onClick={() => removeFromCart(item.id)}
            >
              ❌ Remover
            </button>
          </div>
        </div>
      ))}

      <h3>Total: R$ {getTotal().toFixed(2)}</h3>

      <div className="carrinho-actions">
        <button onClick={clearCart}>Limpar Carrinho</button>

        <button className="btn-finalizar" onClick={finalizarCarrinho}>
          Finalizar Carrinho
        </button>
      </div>
    </div>
  );
}

export default Carrinho;
