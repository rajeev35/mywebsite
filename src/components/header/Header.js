import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            Rajeev
          </a>

          <div className={`nav__menu ${Toggle ? "show-menu" : ""}`}>
            <ul className="nav__list grid">
              {[
                { id: "#home", icon: "uil-estate", text: "Home" },
                { id: "#about", icon: "uil-user", text: "About" },
                { id: "#skills", icon: "uil-file-alt", text: "Skills" },
                { id: "#services", icon: "uil-briefcase-alt", text: "Services" },
                { id: "#projects", icon: "uil-scenery", text: "Projects" },
                { id: "#contact", icon: "uil-message", text: "Contact" },
              ].map(({ id, icon, text }) => (
                <li className="nav__item" key={id}>
                  <a
                    href={id}
                    onClick={() => {
                      setActiveNav(id);
                      showMenu(false); // Close menu on click
                    }}
                    className={`nav__link ${activeNav === id ? "active-link" : ""}`}
                  >
                    <i className={`uil ${icon} nav__icon`}></i> {text}
                  </a>
                </li>
              ))}
            </ul>

            <i className="uil uil-times nav__close" onClick={() => showMenu(false)}></i>
          </div>

          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
