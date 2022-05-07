import React from 'react'
import '../Styles/Home.css'
import doctor from '../Images/Doctor.png'
export const Home = () => {
  return (
    <>
    <div className='' id="main-display">
    <div className="main-text">
    <h1 className="home-text">
      Medicine Redistribution Made Simple For <span>Everyone</span>
    </h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora sapiente dolor eaque, quam placeat at, pariatur magni ullam autem molestias maiores mollitia accusantium iusto totam impedit, reiciendis quibusdam. Neque, iusto.
    </p>
    <button className="btn btn-sm btn-primary">
      Donate Now
    </button>
    </div>
    <img id="doctor" src={doctor} alt="Doctor.png"/>
    </div>
    </>
  )
}
