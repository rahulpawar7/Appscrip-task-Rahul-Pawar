import { useState } from "react";
import styles from "../../styles/Home.module.css";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

interface ProductListProps {
  initialProducts: Product[];
  initialLimit: number;
}

const ProductList = ({ initialProducts, initialLimit }: ProductListProps) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [limit, setLimit] = useState(initialLimit);
  const [loading, setLoading] = useState(false);

  const loadMoreProducts = async () => {
    setLoading(true);
    const newLimit = limit + 10;

    // Fetch from our custom API route
    const response = await fetch(`/api/products?limit=${newLimit}`);
    const newProducts = await response.json();

    setProducts(newProducts);
    setLimit(newLimit);
    setLoading(false);
  };

  return (
    <>
      <div className={styles.gridContainer}>
        {products.map((product: any, index: any) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <button
        onClick={loadMoreProducts}
        className={styles.loadMore}
        disabled={loading}
      >
        {loading ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default ProductList;
