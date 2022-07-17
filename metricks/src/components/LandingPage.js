import React, {useState} from 'react';
import '../styles/LandingPage/LandingPage.css';
import { alpha, styled } from '@mui/material/styles';
import { Box, TextField } from '@mui/material';
import DesktopForm from '../components/DesktopForm';
import MobileForm from '../components/MobileForm';
import Logo from '../assets/Logo.png';





const LandingPage = () => {
  
    return (
        <section className='landing-page'>
            <img src={Logo} alt='Logo' className='Logo'/>
            <p className='metricks'>METRICKS</p>
            <p className='coming-soon'>Something Awesome Is Coming Soon</p>
            <p className='affiliate'>Your all-in-one affiliate marketing tracking software <b>track, 
               automate</b> and <b>optimize </b>your campaigns.</p>
            <div className='flex-container'>
              <div>
                <p><b>7</b> <br/> <h6>Days</h6></p>
              </div>
              <div>
                <p><b>24</b> <br/> <h6>Hours</h6></p>
              </div>
              <div>
                <p><b>54</b> <br/> <h6>Minutes</h6></p>
              </div>
              <div>
                <p><b>11</b> <br/> <h6>Seconds</h6></p>
              </div>
              </div>
               {window.innerWidth < 780 ? <MobileForm/> : <DesktopForm />}
          </section>
    )
}


export default LandingPage;