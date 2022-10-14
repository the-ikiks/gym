import React from 'react'
import "./index.css";
import Header from '../header'
import Footer from '../footer'
import AdvertImage from '../../static/images/gym.png'

function Home() {
    return (
        <div>
            <Header/>
           
<div className="home">
    <div className="advert-section">
      
        <div className="advert-second-section">
            <img src = {AdvertImage} alt = "Advert"/>

        </div>
        <div className="advert-first-section">
            <h1>Take Your Health & Fitness To The Next Level</h1>
            <p>
                Life has its up and downs. Even with 99 problems, going to the gym will help you ignore all of them.
                 It's your workout. Hustle for that muscle, hustle to stay fit and healthy. 
            </p>
            <button>Get Started</button>
        </div>
    </div>
</div>

            <Footer/>
        </div> 
    )
}

export default Home