import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo";
import miniCart from "../../assets/mini-cart.svg";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <Link to="/">
          <Logo />
        </Link>

        <form className="header-search" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Pesquisar produto..." />
          <button type="submit" aria-label="Buscar">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8F8F8F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </form>

        <div className="header-actions">
          <Link to="/signup" className="header-signup">
            Cadastre-se
          </Link>
          <Link to="/login" className="header-login">
            Entrar
          </Link>
          <img src={miniCart} alt="Carrinho" />
        </div>
      </div>

      <nav className="header-nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Produtos</NavLink>
        <NavLink to="/categories">Categorias</NavLink>
        <NavLink to="/orders">Meus Pedidos</NavLink>
      </nav>
    </header>
  );
}

export default Header;