import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ContactPage/ContactPage.css';
import arrow from '../assets/arrow.svg';



const ContactPage = () => {
    return (
        <section className='contact-page'>
          <div className='contactpage-detail'>
            <button className='home-btn'>
             <Link to='/'><img src={arrow} style={{width: '30px'}} /></Link>
            </button>
            <p className='message'>
             Hey, we are still in the works, but you can send us a message!
            </p>
            <form className='form'>
            <label className='fname-label'>First name</label>
             <input type='text' placeholder='Enter your First name' className='fname'/>
             <label className='lname-label'>Last name</label>
             <input type='text' placeholder='Enter your Last name' className='lname'/>
             <label className='email-label'>Email address</label>
             <input type='text' placeholder='Enter your Email address' className='email'/>
             <label className='textarea-label'>Tell us what you need help with:</label>
             <input 
                    type='text' 
                    placeholder='Enter a topic, like " channel problem... "' 
                    className='textarea'/>
            <button className='send-btn'>
                SEND NOW
            </button>
            </form>
          </div>
        </section>
    )
}





export default ContactPage;