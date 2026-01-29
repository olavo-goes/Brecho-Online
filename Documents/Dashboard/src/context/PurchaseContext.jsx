import { createContext, useContext, useEffect, useState } from "react";

const PurchaseContext = createContext();

export function PurchaseProvider({ children }) {
  const [historico, setHistorico] = useState(() => {
    const saved = localStorage.getItem("historico-compras");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "historico-compras",
      JSON.stringify(historico)
    );
  }, [historico]);

  function registrarCompra(itens) {
    const novaCompra = {
      id: crypto.randomUUID(),
      itens,
      data: new Date().toISOString(),
      total: itens.reduce(
        (soma, item) => soma + item.price * item.quantity,
        0
      )
    };

    setHistorico((prev) => [novaCompra, ...prev]);
  }

  return (
    <PurchaseContext.Provider value={{ historico, registrarCompra }}>
      {children}
    </PurchaseContext.Provider>
  );
}

export function usePurchase() {
  return useContext(PurchaseContext);
}
