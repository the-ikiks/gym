import React from 'react';
import Logo from "../../static/images/logo.png"
import{Link} from "react-router-dom";
import "./index.css";

function Header() {
    return (
        <div className='header'>
         <div className='logo-section'>
         <img src={Logo} alt= "Logo"/>
           <h1>
          SPARTAN<span>HUB</span>
           </h1>
         </div>

         <nav>
            <li>
                <Link to = "/">Home</Link>
            </li>

            <li>
                <Link to = "/">Plans</Link>
            </li>

            <li>
                <Link to = "/">Trainers</Link>
            </li>

            <li>
                <Link to = "/">Contact</Link>
            </li>
            </nav>
        </div> 
    )
}

export default Header