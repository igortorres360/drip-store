import Layout from "../Layout";
import Section from "../../components/Section";
import ProductListing from "../../components/ProductListing";
import { products } from "../../data/products";

function ProductListingPage() {
  return (
    <Layout>
      <Section title="Todos os produtos">
        <ProductListing products={products} />
      </Section>
    </Layout>
  );
}

export default ProductListingPage;