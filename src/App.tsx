import Header from "./components/header";
import Layout from "./components/layout";
import SelectedProduct from "./components/selected-product";
import { ProductProvider } from "./context/product-context";

function App() {
  return (
    <Layout>
      <Header />
      <ProductProvider>
        <SelectedProduct />
      </ProductProvider>
    </Layout>
  );
}

export default App;
