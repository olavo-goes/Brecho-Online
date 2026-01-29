import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { PurchaseProvider } from "./context/PurchaseContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PurchaseProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </PurchaseProvider>
  </React.StrictMode>
);
