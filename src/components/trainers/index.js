import React from 'react'
import Header from '../header';
import Footer from "../footer";
import Intro from '../intro';
import IntroImage from '../../static/images/lifts.jpg';
import CardII from '../card II'
import './index.css'
import BigSam from "../../static/images/Pictures/BigSam.jpg"
import Jenny from "../../static/images/Pictures/Jenny.jpg"
import Kunta from "../../static/images/Pictures/Kunta.jpg"
import David from "../../static/images/Pictures/David.jpg"
import Matt from "../../static/images/Pictures/Matt.jpg"
import Sansay from "../../static/images/Pictures/Sansay.jpg"


function Trainers() {
  return (
    <div className='trainers'>
      <Header/>
      
      <Intro
        image={IntroImage}
        title= "Our Trainers"
        description="Meet Our Experienced Trainers"
        />

        <div className='trainers-content'>
          <CardII 
          image = {Sansay} 
          title = "Sansay"
           description= "Go hard or go home"
            />

             <CardII 
          image = {Kunta} 
          title = "Kunta"
           description= "Go hard or go home"
            />
            
             <CardII 
          image = {Jenny} 
          title = "Jenny"
           description= "Go hard or go home"
            />
            
             <CardII 
          image = {David} 
          title = "David"
           description= "Go hard or go home"
            />

             <CardII 
          image = {Matt} 
          title = "Matt"
           description= "Go hard or go home"
            />

             <CardII 
          image = {BigSam} 
          title = "BigSam"
           description= "Go hard or go home"
            />
         </div>


        <Footer/>
    </div>
  )
}

export default Trainers
