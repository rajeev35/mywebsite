import React, { useState } from 'react';
import "./services.css"

const Services = () => {
    const[toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className=" uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Frontend <br /> Development</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal" }>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times
                        services__modal-close"></i>


                        <h3 className="services__modal-title">Frontend Developer</h3>
                        <p className="services__modal-description">
                        Services with More then 1 year of Experience.
                        Providing quality 
                        work to clients and companies.
                        </p>
                        
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                I Develop User Interface.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                Visual design.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                I Create ux element interactions.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                I Position Your Company brand.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                Design and mockups of products for companies.
                                </p>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className=" uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Backend <br /> Development</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal" }>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times
                        services__modal-close"></i>


                        <h3 className="services__modal-title">Backend Developer </h3>
                        <p className="services__modal-description">
                        Services with More then 1 year of Experience.
                        Providing quality 
                        work to clients and companies. 
                        </p>
                        
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                I Develop User Interface.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                Web Page Portal.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                I Create ux element interactions.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                I Position Your Company brand.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                Design and mockups of products for companies.
                                </p>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className=" uil uil-edit services__icon"></i>
                    <h3 className="services__title">Data Structure & <br />Algorithm</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal" }>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times
                        services__modal-close"></i>


                        <h3 className="services__modal-title">Data Structure & Algorithm</h3>
                        <p className="services__modal-description">
                        Services with More then 1 year of Experience.
                        Providing quality 
                        work to clients and companies.
                        </p>
                        
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                I Develop User Interface.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                Web Page Development.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                I Create ux element interactions.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                I Position Your Company brand.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                Design and mockups of Web Page for companies.
                                </p>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div> 
    </section>
  )
}

export default Services;