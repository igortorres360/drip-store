import ProductCard from "../ProductCard";
import "./style.css";

function ProductListing({ products }) {
  return (
    <div className="product-listing">
      {products.map((product) => (
        <ProductCard
          key={product.name}
          image={product.image}
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
}

export default ProductListing;