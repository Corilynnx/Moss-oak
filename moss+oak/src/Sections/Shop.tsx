import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import styles from '../styles/Shop.module.css';
import ProductCard from './ProductCard';
import { products } from '../Data/products';
import Footer from '../Components/Layout/Footer';



type FilterOption = 'default' | 'price-high-low' | 'price-low-high' | 'bestsellers';
 
const Shop = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialFilter = (searchParams.get('filter') as FilterOption) ?? 'default';
    const [activeFilter, setActiveFilter] = useState<FilterOption>(initialFilter);
 
    const filteredProducts = useMemo(() => {
        switch (activeFilter) {
            case 'price-high-low':
                return [...products].sort((a, b) => b.price - a.price);
            case 'price-low-high':
                return [...products].sort((a, b) => a.price - b.price);
            case 'bestsellers':
                return products.filter(p => p.isBestSeller);
            default:
                return products;
        }
    }, [activeFilter]);
 
    const handleFilter = (filter: FilterOption) => {
        setActiveFilter(filter);
        if (filter === 'default') {
            setSearchParams({});
        } else {
            setSearchParams({ filter });
        }
    };
 
    const filterButtons: { label: string; value: FilterOption }[] = [
        { label: 'All Products', value: 'default' },
        { label: 'Price: High → Low', value: 'price-high-low' },
        { label: 'Price: Low → High', value: 'price-low-high' },
        { label: '⭐ Bestsellers', value: 'bestsellers' },
    ];
 
    return (
        <div className={styles['shop-page']}>
            <div className={styles['shop-header']}>
                <h1 className={styles['shop-title']}>Shop Our Collection</h1>
                <p className={styles['shop-subtitle']}>
                    Discover our thoughtfully crafted furniture, designed to bring sustainable style and timeless design to your home.
                </p>
            </div>
 
            <div className={styles['filter-bar']}>
                {filterButtons.map(btn => (
                    <button
                        key={btn.value}
                        className={`${styles['filter-btn']} ${activeFilter === btn.value ? styles['filter-btn-active'] : ''}`}
                        onClick={() => handleFilter(btn.value)}
                    >
                        {btn.label}
                    </button>
                ))}
            </div>
 
            {filteredProducts.length === 0 ? (
                <p className={styles['no-results']}>No products found.</p>
            ) : (
                <div className={styles['products-grid']}>
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
            <Footer />
        </div>
    );
};
 
export default Shop;