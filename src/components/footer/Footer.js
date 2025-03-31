import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Rajeev Kumar</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>
            </ul>

           <div className="footer__social">
           <a href="https://www.facebook.com/profile.php?id=100025227675435" className="footer__social-link" target="_blank">
        <i class="bx bxl-facebook"></i>
        </a>

        <a href="https://www.instagram.com/krajeev.me/" className="footer__social-link" target="_blank">
        <i class="bx bxl-instagram"></i>
        </a>

        <a href="https://twitter.com/35_rajeev" className="footer__social-link" target="_blank">
        <i class="bx bxl-twitter"></i>
        </a>
           </div>
           <span className="footer__copy">Rajeev Kumar. all rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer