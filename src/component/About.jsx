import React from 'react'
import logo from '../image/logo23.png'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {faWhatsapp , faTwitter} from '@fortawesome/free-brands-svg-icons';

function About() {
   return(
    <div className='about' id='features'>
        <h1>ABOUT US</h1>
    <div class="home-container">
    
        <div class="profile-card">
            <div class="img">
                <img src={logo} alt="/" />
            </div>
            <div class="caption">
                <h3>Rachit Srivastav</h3>
                <p>Back End Developer</p>
                
            </div>
        </div>
        <div class="profile-card">
            <div class="img">
                <img src={logo} alt="/" />
            </div>
            <div class="caption">
                <h3>Biswajit Rout</h3>
                <p>Front End Developer</p>
                
            </div>
        </div>
        <div class="profile-card">
            <div class="img">
                <img src={logo} alt="/" />
            </div>
            <div class="caption">
                <h3>Abhijeet Saxena</h3>
                <p>HTML,CSS</p>
                
            </div>
        </div>
        <div class="profile-card">
            <div class="img">
                <img src={logo} alt="/" />
            </div>
            <div class="caption">
                <h3>Nirbhay</h3>
                <p>UI,UX Designer</p>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default About
