import React from 'react';
import Header from '../header';
import Footer from "../footer";
import Intro from '../intro';
import IntroImage from '../../static/images/lifts.jpg';
import Card from '../card'
import './index.css'

function Plans() {
    return (
        <div className='plans'>
            <Header />
            <Intro
                image={IntroImage}
                title="Membership Plans"
                description="Find the right plans for you today. Start your fitness journey by subscribing to any of our plans below" />

            <div className='plans-content'>
                <Card
                    title="Bronze Package"
                    description="Subscribe weekly to get access to our World-class fitness facilities"
                    pricing="4000" />
                <Card
                    title="Silver Package"
                    description="Subscribe monthly to get access to our World-class fitness facilities"
                    pricing="4000" />
                <Card
                    title="Gold Package"
                    description="Subscribe weekly to get access to our World-class fitness facilities"
                    pricing="4000" />
                <Card
                    title="Platinum Package"
                    description="Subscribe weekly to get access to our World-class fitness facilities"
                    pricing="4000" />
                <Card
                    title="Family & Freinds"
                    description="Subscribe weekly to get access to our World-class fitness facilities"
                    pricing="4000" />
            </div>
            <Footer />
        </div>
    )
}

export default Plans
