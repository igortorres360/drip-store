import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Section from "../../components/Section";

function ProductViewPage() {
  const { id } = useParams();

  return (
    <Layout>
      <Section title={`Produto ${id}`}>
        <p>Página de visualização do produto (em construção).</p>
      </Section>
    </Layout>
  );
}

export default ProductViewPage;