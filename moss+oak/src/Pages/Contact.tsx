import Footer from "../Components/Layout/Footer";
import styles from '../styles/Contact.module.css';

export function Contact() {
    return (
        <div className={styles['contact-page']}>
            <header className={styles['contact-header']}>
                <h1 className={styles['contact-title']}>Get in Touch</h1>
                <p className={styles['contact-subtitle']}>Have questions or want to learn more about our sustainable furniture? We're here to help!</p>
            </header>
            <main className={styles['contact-main']}>
                
                <section className={styles['contact-form']}>
                    <h2>Send Us a Message</h2>
                    <form>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required />

                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" placeholder="Your Message" required></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </section>

            </main>
            <Footer />
        </div>  
    )
};

export default Contact;