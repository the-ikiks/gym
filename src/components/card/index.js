import React from 'react'
import "./index.css"

function Card({ title, description, pricing}) {
  return (
    <div className='card'>
     <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <h4>
        
             <small>&#8358;</small> {pricing} <span>/month</span>
             </h4>
             </div>  
             <button>SUBSCRIBE</button>
    </div>
  );
}

export default Card

