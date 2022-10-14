import React from 'react';
import "./index.css";
import Logo from  "../../static/images/logo.png"
import {Instagram, Facebook, Twitter, WhatsApp} from "@mui/icons-material";
import {Link} from "react-router-dom"


function Footer() {
    return (
        <div className='footer'>
            <div className="footer-flex-one">
            {/* first section */}
            <div className="footer-first-section">
                <div className="footer-logo-section">
                    <img src={Logo} alt ="logo" />
                <h1>
                    SPARTAN<span>HUB</span>
                </h1>
                </div>
                <p>SpartanHub is the best gym in the world </p>
                  
              <div>    
               <a href="/"><Instagram/></a>
               <a href="/"><Facebook/></a>
               <a href="/"><Twitter/></a>
               <a href="/"><WhatsApp/></a>
             </div>
            </div>

               {/* second section */}
               <div className="footer-second-section">
                <h2>Links</h2>

                
                   <li><Link to = "/">About</Link></li>
                    <li><Link to = "/">Plans</Link></li>
                    <li> <Link to = "/">Trainers</Link></li>
                   <li><Link to = "/">Contact</Link></li>
                
               </div>

                  {/* third section */}
            <div className="footer-second-section">
               <h3>Insights</h3>

              <li><Link to = "/">Community</Link></li>
              <li><Link to = "/">Events</Link></li>
              <li><Link to = "/">FAQs</Link></li>
               

            </div>

               {/* fourth section */}
               <div className="footer-second-section">
                <h4>Get In Touch</h4>
                
                <li><Link to = "/">Contact Us</Link></li>
                <li> <Link to = "/">Support Us</Link></li>
                
               </div>
      
        </div> 

        <hr />

        <div className="footer-flex-two">
            <p>&copy; Copyright SpartanHub</p>
        </div>
        </div>
    );
}

export default Footer