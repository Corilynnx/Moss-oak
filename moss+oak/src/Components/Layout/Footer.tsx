
import React from 'react';
import styles from '../../styles/Footer.module.css';

const Footer: React.FC = () => {
    return (
     
      <section className={styles['footer']}>
  <div className={styles['footer-content']}>
    <h2 className={styles['footer-title']}>Join the Moss + Oak Community</h2>
    <p className={styles['footer-subtitle']}>Sign up for our newsletter to receive exclusive offers, design inspiration, and updates on new collections.</p>
    <div className={styles['newsletter-form']}>
      <input type="email" placeholder="Enter your email" className={styles['newsletter-input']} />
      <button className={styles['newsletter-btn']}>Subscribe</button>
    </div>
  </div>

  <div className={styles['footer-grid']}>
    <div className={styles['footer-column']}>
      <h3 className={styles['footer-heading']}>About</h3>
      <ul className={styles['footer-list']}>
        <li><a href="#ourstory">Our Story</a></li>
        <li><a href="#sustainability">Sustainability</a></li>
        <li><a href="#craftmanship">Craftmanship</a></li>
      </ul>
    </div>

    <div className={styles['footer-column']}>
      <h3 className={styles['footer-heading']}>Support</h3>
      <ul className={styles['footer-list']}>
        <li><a href="#contact">Contact Us</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#shipping">Shipping & Returns</a></li>
      </ul>
    </div>

    <div className={styles['footer-column']}>
      <h3 className={styles['footer-heading']}>Follow Us</h3>
      <ul className={styles['footer-list']}>
        <li><a href="#instagram">Instagram</a></li>
        <li><a href="#facebook">Facebook</a></li>
        <li><a href="#twitter">Twitter</a></li>
      </ul>
    </div>
    <div className={styles['footer-column']}>
                    <h3 className={styles['footer-heading']}>Contact Information</h3>
                    <ul className={styles['footer-list']}>
                    <li><p><strong>Email:</strong> <a href="mailto:info@mossandoak.com">info@mossandoak.com</a></p></li>
                    <li><p><strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a></p></li>
                    <li><p><strong>Address:</strong> 555 Tolken Dr, Green City, Earth</p></li>
                    </ul>
                </div>
  </div>  {/* ← footer-grid closes here, after all 3 columns */}

</section>

    );
};

export default Footer;