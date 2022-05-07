import React from 'react'
import '../Styles/Home.css'
import doctor from '../Images/Doctor.png'
// import { Link } from "react-router-dom";
let goToViolation=()=>{
  const violation = document.getElementById("donate"); 
  window.scrollTo({
    top:violation.offsetTop,
    behavior:"smooth"
});
};
export const Home = () => {
  return (
    <>
    <div className='' id="main-display">
    <div className="main-text">
    <h1 className="home-text">
      Medicine Redistribution Made Simple For <span>Everyone</span>
    </h1>
    <p>
    Lend a helping hand to those in need by donating unused medication or funds to support our work. Your donations stop waste and save lives.
    </p>
    <button className="btn btn-sm btn-primary" onClick={goToViolation}>
      Donate Now
    </button>
    </div>
    <img id="doctor" src={doctor} alt="Doctor.png"/>
    </div>
    </>
  )
}
