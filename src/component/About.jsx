import React from 'react'
import logo from '../image/logo23.png'


function About() {
    
   return(
    <div className='about' id='features'>
        <h1><span>ABOUT</span> US</h1>
        <p>Our team is growing team in the field of web devlopment and</p>
        <p>keep growing to become our best version</p>
    <div class="home-container">
        <div class="profile-card">
            <div class="img">
                <img src={logo} alt="/" />
            </div>
            <div class="caption">
                <h3>Rachit Srivastav</h3>
                <p>Back End developer</p>
                
            </div>
        </div>
        <div class="profile-card">
            <div class="img">
                <img src={logo} alt="/" />
            </div>
            <div class="caption">
                <h3>Biswajit Rout</h3>
                <p>Front End developer</p>
                
            </div>
        </div>
        <div class="profile-card">
            <div class="img">
                <img src={logo} alt="/" />
            </div>
            <div class="caption">
                <h3>Abhijeet Saxena</h3>
                <p>HTML & CSS</p>
                
            </div>
        </div>
        <div class="profile-card">
            <div class="img">
                <img src={logo} alt="/" />
            </div>
            <div class="caption">
                <h3>Nirbhay</h3>
                <p>UI & UX Designer</p>
                
            </div>
        </div>
       
    </div>
    </div>
    
  )
}

export default About
