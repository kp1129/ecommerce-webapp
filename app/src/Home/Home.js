import React from 'react'
import './Home.css';
import backgroundAd from '../images/alexa-ad.jpg';

import Product from '../Product/Product';
import { data } from '../data';


const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                {/* background ad */}
                <img className="home__containerAd" alt="Alexa, find free TV shows. Fire TV Stick. $29.99. Limited-time offer." src={backgroundAd} />
                {/* product display */}
                <div className="home__row">
                <Product data={data.products[0]} />
                <Product data={data.products[1]}/>
                <Product data={data.products[2]}/>
                <Product data={data.products[3]}/>
                </div>
                {/* <div className="home__row">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                </div>
                <div className="home__row">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                
                </div> */}
            </div>
        </div>
    )
}

export default Home

