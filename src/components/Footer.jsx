import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <ul className="footer-links">
                    <li><a href="/about">Tentang Kami</a></li>
                    <li><a href="/contact">Kontak</a></li>
                    <li><a href="/privacy">Kebijakan Privasi</a></li>
                </ul>
                <p>&copy; {new Date().getFullYear()} Petungkriyono. Semua hak dilindungi.</p>
            </div>
        </footer>
    );
};

export default Footer;