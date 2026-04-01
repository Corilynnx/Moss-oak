import styles from '../styles/ProductCard.module.css';
import { useCart } from '../Context/cartContext';
import type { Product } from '../Types';
import { useState } from 'react';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useCart();
    const [expanded, setExpanded] = useState(false);
return (
    <div className={styles['product-card']}>

      <div className={styles['product-card-img-wrap']}>
        <img
          src={product.image}
          alt={product.name}
          className={styles['product-card-img']}
        />
        
        {product.isBestSeller && (
          <span className={`${styles['product-badge']} ${styles['product-badge--best']}`}>
            Bestseller
          </span>
        )}
      </div>

      <div className={styles['product-card-body']}>
        <h3 className={styles['product-card-name']}>{product.name}</h3>
        <p className={styles['product-card-desc']}>
          {expanded || product.description.length <= 200
      ? product.description
      : `${product.description.slice(0, 200)}...`}
    {product.description.length > 200 && (
      <a
        className={styles['read-more-btn']}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Read less' : ' Read more'}
      </a>
    )}
        </p>

          


        <div className={styles['product-card-footer']}>
          <span className={styles['product-card-price']}>
            ${product.price.toLocaleString()}
          </span>
          <button
            className={styles['product-card-btn']}
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;