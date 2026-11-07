import Section from "./components/Section";
import ProductListing from "./components/ProductListing";
import Header from "./components/Header";

const products = [
  { name: "Produto 1", image: "/product-thumb-1.jpeg", price: 200, priceDiscount: 149.9 },
  { name: "Produto 2", image: "/product-thumb-2.jpeg", price: 49.9 },
  { name: "Produto 3", image: "/product-thumb-3.jpeg", price: 120, priceDiscount: 99.9 },
  { name: "Produto 4", image: "/product-thumb-4.jpeg", price: 89.9 },
  { name: "Produto 5", image: "/product-thumb-5.jpeg", price: 250, priceDiscount: 199.9 },
  { name: "Produto 6", image: "/product-thumb-1.jpeg", price: 75.5 },
  { name: "Produto 7", image: "/product-thumb-2.jpeg", price: 310, priceDiscount: 259.9 },
  { name: "Produto 8", image: "/product-thumb-3.jpeg", price: 64.9 },
];

function App() {
return (
  <>
    <Header />
    <Section title="Produtos em alta" titleAlign="left">
      <ProductListing products={products} />
    </Section>
  </>
);
}

export default App;

