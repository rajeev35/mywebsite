import React from 'react'
import "./home.css";
import Social from './Social.js';
import Data from './Data.js'
import ScrollDown from './ScrollDown.js';

const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social/>

                <div className="home__img"></div>

                <Data/>
                

            </div>
            <ScrollDown/>
        </div>
    </section>
  )
}

export default Home;