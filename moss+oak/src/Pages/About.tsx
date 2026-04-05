import { Link } from 'react-router-dom';
import styles from '../styles/About.module.css';
import HeaderVid from '../assets/header-video.mp4';
import Footer from '../Components/Layout/Footer';

export function About() {
    return (
        <div className={styles['about-page']}>
            <header className={styles['about-header']}>
                <video autoPlay loop muted className={styles['header-video']}>
                    <source src={HeaderVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={styles['header-overlay']}>
                    <p className={styles['header-subtitle']}>At Moss & Oak, we believe your home should feel grounded, calm, and connected to the natural world. Our pieces are crafted using sustainably sourced wood, soft neutral fabrics, and timeless silhouettes designed to last for years—not just seasons.</p>
                    <button className={styles['cta-btn']}><Link to="/shop">Shop Our Products</Link></button>
                </div>
               
                <div>

                </div>
            </header>
             <div className={styles['about-content']}>
                    <h1 className={styles['about-title']}>Our Story</h1>
                    <p className={styles['about-text']}>We started small — a workshop, a handful of tools, and an obsession with getting things right. Every joint hand-fitted. Every surface hand-finished. Every piece of wood chosen not just for how it looks, but for where it came from and how long it will last. From the beginning, we refused to cut corners, because we knew that the most sustainable product is simply one you never need to replace.
Our materials are sourced with intention. We work exclusively with sustainably harvested and reclaimed wood — oak, walnut, and ash pulled from responsibly managed forests or given a second life from salvaged sources. No shortcuts. No compromise. Just honest materials, treated with care.
</p>
                    <p className={styles['about-text']}>But sustainability at Moss & Oak goes beyond the wood. Our craftsmen use low-VOC finishes, minimize off-cuts, and pack every order in recycled materials. We think about the full life of a piece — from the forest floor to your living room — and we take responsibility for every step of that journey.
What drives us is the idea that good design and good values aren't opposites. A beautifully made chair can also be an ethical one. A dining table can be both an heirloom and a conscious choice. We believe your home deserves furniture that stands for something — pieces that age gracefully, carry meaning, and connect you to the natural world in a quiet, everyday way.
When you bring a Moss & Oak piece into your home, you're not just buying furniture. You're choosing craft over convenience, longevity over trend, and nature over noise.</p>
                    <h4 className={styles['about-text']}>Welcome to Moss & Oak. We're glad you're here.
</h4>
    </div>
    <Footer />
        </div>

     
    )

}