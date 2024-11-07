import styles from "../../styles/Home.module.css";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }: any) => {
  return (
    <div className={styles.gridContainer}>
      {products.map((product: any, index: any) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
