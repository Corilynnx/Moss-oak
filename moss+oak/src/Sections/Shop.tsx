import styles from '../styles/Shop.module.css';
import ProductCard from './ProductCard';
import { products } from '../Data/products';



const Shop = () => {
    return (
        <div className={styles['shop-page']}>
    
            <div className={styles['shop-header']}>
                <h1 className={styles['shop-title']}>Shop Our Collection</h1>
                <p className={styles['shop-subtitle']}>
                    Discover our thoughtfully crafted furniture, designed to bring sustainable style and timeless design to your home.
                </p>
            </div>
       
              <div className={styles['products-grid']}>
                {products.map(product => (  
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Shop;