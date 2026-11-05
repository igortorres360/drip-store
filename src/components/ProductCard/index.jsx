import "./style.css";

const formatar = (valor) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function ProductCard({ image, name, price, priceDiscount }) {
  return (
    <article className="product-card">
      <img className="product-card-image" src={image} alt={name} />
      <h3 className="product-card-name">{name}</h3>

      {priceDiscount ? (
        <p className="product-card-price">
          <span className="product-card-old-price">{formatar(price)}</span>
          <span>{formatar(priceDiscount)}</span>
        </p>
      ) : (
        <p className="product-card-price">{formatar(price)}</p>
      )}
    </article>
  );
}

export default ProductCard;