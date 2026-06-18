import React from 'react'
import '../Styles/About.css'
import img from '../Assets/maps.svg'
import imglogo from '../Assets/logomain.png'
import { FaCircleCheck , FaMapPin } from "react-icons/fa6";

function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-box">

        {/* ABOUT */}
        <div className="section-title">
          <h3> ABOUT</h3>
          <div className="section-img">
            <img src={imglogo} alt="logo" />
          </div>
        </div>

        <div className="about-desc">
          <p>
            At Douce Delice, we believe that every pastry should bring warmth, comfort, and joy.

            Inspired by traditional baking techniques and crafted with carefully selected ingredients, our bakery offers a delightful selection of brownies, brookies, crookies, and specialty treats.

            Every item is freshly prepared to create memorable moments for our guests.
          </p>
        </div>

        <div className="why-box">
          <h3>WHY CHOOSE DOUCE ?</h3>
          <div className="why-list">
            <p> <FaCircleCheck className='check-icon'/> Fresh Baked Daily</p>
            <p> <FaCircleCheck className='check-icon'/> Premium Ingredients</p>
            <p> <FaCircleCheck className='check-icon'/> Handcrafted With Care</p>
            <p> <FaCircleCheck className='check-icon'/> Seasonal Specialities</p>
          </div>
        </div>

        {/* OPENING HOURS */}
        <div className="opening-box">
          <div className="section-title">
            <h3>OPENING HOURS</h3>
          </div>

          <div className="opening-card">
            <h4>Every Day</h4>
            <p>9:00 AM — 8:00 PM</p>
          </div>
        </div>
        

        {/* LOCATION */}
        <div className="section-title">
          <h3>VISIT US</h3>
        </div>

        <div className="about-loc">
          <FaMapPin className="about-icon" />

          <p>
            18 Camden Passage,
            Islington, London N1 8EA,
            United Kingdom
          </p>
        </div>

        {/* MAP */}
        <div className="about-img">
          <img src={img} alt="maps image" />
        </div>

      </div>
    </div>
  )
}

export default AboutPage