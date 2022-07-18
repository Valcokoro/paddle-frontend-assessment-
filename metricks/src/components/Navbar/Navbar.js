import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import '../../styles/Navbar/Navbar.css';


const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
   return (
       <nav className="navbar">
           <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}
               onClick = {() => setIsMobile(false)}
           >
               <Link to='/comingsoon' >
               </Link>
               <Link to='/about' className='about'>
                   <li>ABOUT US</li>
               </Link>
               <Link to='/blog' className='blog'>
                  <li>BLOG</li>
               </Link>
               {window.innerWidth < 780 ?
               (<Button
                 variant="contained"
                 style={{
                    marginTop: "5px", 
                    marginLeft:"15px",
                    position:'absolute', 
                    width: '290px',
                    height:'48px',
                    backgroundColor:'#271AC1',
                    borderRadius: '200px',
              }}
               >
               <Link to='/contact' className='contact'>
                   <li>CONTACT US</li>
               </Link>
               </Button>)
               :
               (<Button
                variant="contained"
                style={{
                   marginTop: "-5px", 
                   marginLeft:"280px",
                   position:'absolute', 
                   width: '230px',
                   height:'53px',
                   backgroundColor:'#271AC1',
                   borderRadius: '200px',
             }}
              >
              <Link to='/contact' className='contact'>
                  <li>CONTACT US</li>
              </Link>
              </Button>)
              }   
           </ul>
           <button className='phone-menu-icon'
              onClick={ () => setIsMobile(!isMobile)} >
               {isMobile ? (
               <i className="times icon"></i> 
               )
               : (<i className="bars icon"></i>)}
           </button>
       </nav>
   )
}


export default Navbar;