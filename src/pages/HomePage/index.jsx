
import Layout from "../Layout";
import Section from "../../components/Section";
import ProductListing from "../../components/ProductListing";
import { products } from "../../data/products";

function HomePage() {
  return (
    <Layout>
      <Section title="Produtos em alta">
        <ProductListing products={products} />
      </Section>
    </Layout>
  );
}

export default HomePage;