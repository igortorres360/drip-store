import Logo from "../Logo";
import Informations from "../Informations";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import "./style.css";

const informacoes = [
  { text: "Sobre Drip Store", link: "/about" },
  { text: "Segurança", link: "/security" },
  { text: "Wishlist", link: "/wishlist" },
  { text: "Blog", link: "/blog" },
  { text: "Trabalhe conosco", link: "/careers" },
  { text: "Meus Pedidos", link: "/orders" },
];

const categorias = [
  { text: "Camisetas", link: "/products" },
  { text: "Calças", link: "/products" },
  { text: "Bonés", link: "/products" },
  { text: "Headphones", link: "/products" },
  { text: "Tênis", link: "/products" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-about">
          <Logo variant="footer" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src={twitter} alt="Twitter" />
            </a>
          </div>
        </div>

        <Informations title="Informações" informations={informacoes} />
        <Informations title="Categorias" informations={categorias} />

        <div className="informations">
          <h4 className="informations-title">Contato</h4>
          <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE</p>
          <p>(85) 3051-3411</p>
        </div>
      </div>

      <hr />
      <p className="footer-copy">© {new Date().getFullYear()} Digital Store</p>
    </footer>
  );
}

export default Footer;