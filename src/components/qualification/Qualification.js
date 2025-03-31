import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
    const[toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };    
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
              <div 
              className={toggleState === 1 ? 
              "qualification__button qualification__active button--flex" :
               "qualification__button button--flex "} onClick={() => toggleTab(1)}>
                <i className="uil uil-graduation-cap qualification__icon"></i>
                 Education
              </div>  

              <div className={toggleState === 2 ? 
              "qualification__button qualification__active button--flex" :
               "qualification__button button--flex "} onClick={() => toggleTab(2)}>
                <i className="uil uil-briefcase-alt qualification__icon"></i>
                 Experience
              </div>  
            </div>

            <div className="qualification__sections">
                <div className={ toggleState === 1 ?
                 "qualification__content qualification__content-active" : "qualification__content"} onClick = {() => toggleTab(1)}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B.tech (IT)</h3>
                            <span className="qualification__subtitle">
                            ABES Instetute of Technology</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                 2020-2024
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title"> Senior Secondary</h3>
                            <span className="qualification__subtitle">
                            MJK College Bettiah</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                 2018-2020
                            </div>
                        </div>             
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">High School</h3>
                            <span className="qualification__subtitle">
                            Ms Memorial Public School</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                 2017 - 2018
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>
                </div>

                <div className={ toggleState === 2 ?
                 "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">


                        <div>
                            <h3 className="qualification__title">Software Engineer</h3>
                            <span className="qualification__subtitle">
                            Raasa Karts</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                 Dec 2024 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Software Engineer Intern </h3>
                            <span className="qualification__subtitle">
                            Raasa Karts</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                 Sep 2024 - Dec 2024
                            </div>
                        </div>             
                    </div>

                   
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification