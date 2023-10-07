import React from 'react'
import test1 from '../image/course.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
//import {faDiscord,faTwitter,faLinkedin,faYoutube} from '@fortawesome/free-brands-svg-icons';


function Courses() {
  return (
    
<div className='raw'>
    <h1>COURSES</h1>
<div className='body' id='services'>

    <input type="checkbox" id="checkbox-cover"/>
    <input type="checkbox" id="checkbox-page1"/>
    <input type="checkbox" id="checkbox-page2"/>
    <input type="checkbox" id="checkbox-page3"/>
    <div className="book">
        <div className="cover">
            <label for="checkbox-cover"></label>
        </div>
        <div className="page" id="page1">
            <div className="front-page">
                <h2>Courses</h2>
                <label className="next" for="checkbox-page1">
                <FontAwesomeIcon icon={faChevronRight}/>
                </label>
            </div>
            <div className="back-page">
            <h2>Linux</h2>
                <img src={test1} alt="/" className='course' style={{display:'flex',
                    alignItems:'center',justifyContent:'center', margin:'6% auto',border:'3px solid #4173a5',
                    borderRadius:'6px',boxShadow:'0px 10px 15px 0px rgba(0, 0, 0, 0.5)'}}/>

                <a href="/" className='flow'><span>Button </span><i></i></a>
                <label className="prev" for="checkbox-page1">
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </label>
            </div>
        </div>
        <div className="page" id="page2">
            <div className="front-page">
                <h2>page2</h2>
                <img src={test1} alt="/" className='course' style={{display:'flex',
                    alignItems:'center',justifyContent:'center', margin:'6% auto',border:'3px solid #4173a5',
                    borderRadius:'6px',boxShadow:'0px 10px 15px 0px rgba(0, 0, 0, 0.5)'}}/>

                <a href="/" className='flow'><span>Button </span><i></i></a>
                <label className="next" for="checkbox-page2">
                <FontAwesomeIcon icon={faChevronRight}/>
                </label>
            </div>
       
            
            <div className="back-page">
            <h2>page3</h2>
                <img src={test1} alt="/" className='course' style={{display:'flex',
                    alignItems:'center',justifyContent:'center', margin:'6% auto',border:'3px solid #4173a5',
                    borderRadius:'6px',boxShadow:'0px 10px 15px 0px rgba(0, 0, 0, 0.5)'}}/>

                <a href="/" className='flow'><span>Button </span><i></i></a>
                
                <label className="prev" for="checkbox-page2">
                    <FontAwesomeIcon icon={faChevronLeft}/>
                    </label>
            </div>
            </div>
            
        
        <div className="page" id="page3">
            <div className="front-page">
                <h2>Page 3</h2>
                
            </div>
        </div>
        <div className="back-cover"></div>
    </div>

    </div>
  </div>



 
  
  )
}

export default Courses
