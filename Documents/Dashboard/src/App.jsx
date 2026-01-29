import { useState, useEffect } from "react";
import "./App.css";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Carrinho from "./Pages/Carrinho";
import Historico from "./Pages/Historico";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName] = useState("Olavo Goes");
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      setShowFooter(scrollTop + windowHeight >= docHeight - 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <>
      {/* Header fixo */}
      <Header
        userName={userName}
        onDashboardClick={() => setCurrentPage("dashboard")}
        onCarrinhoClick={() => setCurrentPage("carrinho")}
        onHistoricoClick={() => setCurrentPage("historico")}
      />

      {/* Conteúdo principal */}
      {currentPage === "dashboard" && <Dashboard />}
      {currentPage === "carrinho" && <Carrinho />}
      {currentPage === "historico" && <Historico />}

      {/* Footer só aparece no final da página */}
      {showFooter && <Footer />}
    </>
  );
}

export default App;
