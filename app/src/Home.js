import React from 'react'
import './Home.css';
import backgroundAd from './alexa-ad.jpg';

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img alt="Alexa, find free TV shows. Fire TV Stick. $29.99. Limited-time offer." src={backgroundAd} />
            </div>
        </div>
    )
}

export default Home

