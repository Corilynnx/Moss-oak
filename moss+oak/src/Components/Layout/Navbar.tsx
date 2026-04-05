import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../Context/cartContext'
import CartPreview from '../../Pages/cartPreview';
import styles from '../../styles/Navbar.module.css'


const Navbar: React.FC = () => {
    const { items } = useCart();
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const [showCart, setShowCart] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleEnter = () => {
        if (timeout.current) clearTimeout(timeout.current);
        setShowCart(true);
    };

    const handleLeave = () => {
        timeout.current = setTimeout(() => {
            setShowCart(false);
        }, 200);
    };

    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.logo}>Moss+Oak</Link>

            {/* Hamburger button — only visible on mobile */}
            <button
                className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span />
                <span />
                <span />
            </button>

            <ul className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
                <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                <li><Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link></li>
                <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                <li
                    className={styles.cartWrapper}
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                >
                    <Link to="/cart" className={styles.cartLink} onClick={() => setMenuOpen(false)}>
                        <span className={styles.cartIcon}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <path d="M16 10a4 4 0 0 1-8 0" />
                            </svg>
                            {totalItems > 0 && (
                                <span className={styles.cartBadge}>{totalItems}</span>
                            )}
                        </span>
                    </Link>
                    {showCart && <CartPreview />}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar