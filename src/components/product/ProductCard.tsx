import Image from "next/image";
import { default as styles } from "../../styles/Home.module.css";

interface ProductData {
  id: number;
  title: string;
  image: string;
  price: number;
  isNew: string;
  isOutOfStock: string;
  description: string;
}
interface ProductCardProps {
  product: ProductData;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={product?.image}
          alt={product?.title}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.productInfo}>
        <p className={styles.productName}>{product.title}</p>
        <p className={styles.signInText}>
          <a href="#">Sign in</a> or Create an account to see pricing
        </p>
      </div>
      <div className={styles.favoriteIcon}>❤️</div>
    </div>
  );
};

export default ProductCard;
