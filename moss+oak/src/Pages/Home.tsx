import { useState } from 'react';
import styles from '../styles/Home.module.css';
import heroImg from '../assets/images/header-bg.jpg';
import GreenSofa from '../assets/images/seating/green-sofa.jpg';
import Loungechair from '../assets/images/seating/lounge-chair.jpg';
import KayraBed from '../assets/images/beds/kayra-bed.jpg';
import Santo from '../assets/images/seating/santo-outside-chair.jpg'
import { bestSellers } from '../Data/products';
import { Link } from 'react-router';
import Footer from '../Components/Layout/Footer';


export function Home() {
  const [expanded, setExpanded] = useState(false);
  return (
    <><header>
   
      <div className={styles['hero-content']}>
        <div className={styles['hero-img']}>
          <img src={heroImg} alt="Hero Image" className={styles['hero-img']} />
          <div className={styles['hero-overlay']}>
          </div>
        </div>
        <div className={styles['hero-text']}>
          <h1 className={styles['hero-title']}>Bring Nature Home.</h1>
          <p className={styles['hero-subtitle']}>Thoughtfully crafted furniture inspired by natural textures and sustainable materials.</p>
          <div className={styles['hero-btn']}>
            <button className={styles['cta-btn-1']}><Link to="/shop">Shop Products</Link></button>
            <button className={styles['cta-btn-1']}><Link to="/shop?filter=bestsellers">Explore Bestsellers</Link></button>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section className={styles['brand-story']}>
        <div className={styles['brand-story-content']}>
          <h2 className={styles['brand-story-title']}>Sustainable Style, Timeless Design</h2> 
        <p>At Moss & Oak, we believe your home should feel grounded, calm, and connected to the natural world. Our pieces are crafted using
           sustainably sourced wood, soft neutral fabrics,and timeless silhouettes<br></br>designed to last for years—not just seasons.</p>
        <h3 className={styles['brand-story-subtitle']}>Every detail is intentional. Every material is chosen with care.</h3>
        </div>
    
        <div className={styles['brand-story-img']}>
          <div className={styles['brand-story-img-container']}>
            <img src={GreenSofa} alt="Green Sofa" />
            <img src={Loungechair} alt="Lounge Chair" />
            <img src={KayraBed} alt="Kayra Bed" />
          </div>
        </div>
      </section>

      <section className={styles['best-sellers-container']}>
        <div className={styles['best-sellers-header']}>
          <h2 className={styles['best-sellers-title']}>Our Best Sellers</h2>
          <p className={styles['best-sellers-subtitle']}>Discover our most popular pieces, loved by customers for their timeless design and sustainable craftsmanship.</p>
        </div>
        <div className={styles['best-sellers-grid']}>
        {bestSellers.slice(0, 3).map(product => (
          <div key={product.id} className={styles['product-card']}>
            <img src={product.image} alt={product.name} className={styles['product-image']} />
            <p className={styles['product-description']}>
              {expanded ? product.description : product.description.slice(0, 202) + (product.description.length > 202 ? '...' : '')}
  {product.description.length > 202 && (
    <span 
      className={styles['read-more']} 
      onClick={() => setExpanded(!expanded)}
    >
      {expanded ? ' Read Less' : ' Read More'}
    </span>
  )}
              </p>
            <h3 className={styles['product-name']}>{product.name}</h3>
           
            
          </div>
        ))}
        </div>
      </section>

     <section className={styles['sustainability-section']}>

  <div className={styles['sustainability-content']}>
    <h2 className={styles['sustainability-title']}>Our Commitment to Sustainability</h2>
  </div>

  <div className={styles['sustainability-row']}>
    <div className={styles['sustainability-image-wrap']}>
      <img src={Santo} alt="Santo Chair" className={styles['sustainability-image']} />
    </div>
    <div className={styles['sustainability-left']}>
       <p className={styles['sustainability-header']}>WHY IT MATTERS</p>
      <p className={styles['sustainability-text']}>
        We prioritize sustainably sourced materials, ethical production practices,
        and long-lasting construction. Every piece we build starts with reclaimed
        or responsibly harvested wood, keeping waste out of landfills and giving
        raw materials a second life.

         Our craftsmen follow eco-conscious processes from start to finish — using
        low-VOC finishes, minimizing off-cuts, and packaging orders with recycled
        materials. When you invest in one of our pieces, you're choosing furniture
        built to last generations, not seasons.
        <br></br>
          When you invest in one of our pieces, you're not just furnishing a space —
  you're choosing furniture built to last generations, not seasons. Every joint
  is hand-fitted, every surface hand-finished, because we believe the most
  sustainable product is one you never need to replace.
      </p>
    </div>
  </div>

          
      </section>
      <Footer />
    </main>
    
      </>
    

   
  )
};