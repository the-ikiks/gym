import React from 'react'
import "./index.css"
import {Instagram, Facebook, Twitter, WhatsApp} from "@mui/icons-material";
import {Link} from "react-router-dom"


function Card({ image, title, description}) {
  return (
    <div className='cardII'>
     <div className='cardII-first-section'>
        <img src={image} alt = "Trainer"/>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>  
      <div className='cardII-second-section'>
        <Link to = "/"><Instagram/></Link>
        <Link to = "/"><Facebook/></Link>
        <Link to = "/"><Twitter/></Link>
        <Link to = "/"><WhatsApp/></Link>
      </div>
    </div>
  );
}

export default Card

