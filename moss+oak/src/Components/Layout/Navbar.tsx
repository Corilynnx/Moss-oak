import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/Navbar.module.css'

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.logo}>Moss+Oak</Link>

            <ul className={styles.navLinks}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
