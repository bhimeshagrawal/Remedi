import React from "react";
import "../Styles/Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
 export default function Footer(){
     return(
         <div className="footerContainer">
             <div className="iconContainer">
             <div className="icons m-3"><a href="facebook.com"><FaFacebook style={{height:'50px',width:'50px'}}/></a></div>
             <div className="icons m-3"><a href="www.twitter.com"><FaTwitter style={{height:'50px',width:'50px'}} /></a></div>
             <div className="icons m-3"><a href="facebook.com"><FaLinkedinIn style={{height:'50px',width:'50px'}}/></a></div>
             <div className="icons m-3"><a href="facebook.com"><FaInstagram style={{height:'50px',width:'50px'}}/></a></div>
             </div>
             <hr />
             <span className="footerSpan text-center">Merners</span>
         </div>





     )

 }
 