import React from 'react';
import "./skills.css";
import Frontend from './Frontend.js';
import Backend from './Backend.js';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level</span>
        <div className="skill__container container grid">
        <Frontend/>
        <Backend/>

        </div>
    </section>
  )
}

export default Skills