import React, { useState, useEffect } from "react";
import Chatbot from "../chatbot/Chatbot.jsx";
import "./header.css";

const Header = () => {
  const [toggleMenu, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [chatVisible, setChatVisible] = useState(false);

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

  const toggleChat = () => setChatVisible(prev => !prev);

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <button className="deep-ai-btn" onClick={toggleChat}>
            <i className="uil uil-robot"></i> Jiva AI
          </button>


          <a href="index.html" className="nav__logo">
            Rajeev
          </a>

          <div className={`nav__menu ${toggleMenu ? "show-menu" : ""}`}>
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
                      showMenu(false);
                    }}
                    className={`nav__link ${activeNav === id ? "active-link" : ""}`}
                  >
                    <i className={`uil ${icon} nav__icon`}></i> {text}
                  </a>
                </li>
              ))}
            </ul>
            <i
              className="uil uil-times nav__close"
              onClick={() => showMenu(false)}
            ></i>
          </div>

          <div className="nav__toggle" onClick={() => showMenu(!toggleMenu)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>

      <Chatbot visible={chatVisible} onClose={() => setChatVisible(false)} />
    </>
  );
};

export default Header;
