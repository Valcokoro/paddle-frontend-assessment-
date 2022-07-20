import React from 'react';
import '../styles/AboutUs/AboutUs.css';
import Logo from '../assets/Logo.png';


const AboutUs = () => {
    return (
        <section className='about-page'>
          <div className='about-details'>
          <img src={Logo} alt='Logo' className='about-logo'/>
          <p className='about-metricks'>METRICKS</p>
          </div>
        </section>
    )
}


export default AboutUs;