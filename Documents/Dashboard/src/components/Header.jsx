import "./Header.css";

function Header({
  userName,
  onDashboardClick,
  onCarrinhoClick,
  onHistoricoClick,
}) {
  return (
    <header className="header">
      <div className="header-left">
        <h2 className="site-title" onClick={onDashboardClick}>
          Cyber Brechó
        </h2>
      </div>

      <div className="header-right">
        <span className="user-name">👤 {userName}</span>

        <button className="btn-nav" onClick={onDashboardClick}>
          🏠 Dashboard
        </button>

        <button className="btn-nav" onClick={onCarrinhoClick}>
          🛒 Carrinho
        </button>

        <button className="btn-nav" onClick={onHistoricoClick}>
          📜 Histórico
        </button>
      </div>
    </header>
  );
}

export default Header;
