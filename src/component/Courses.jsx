import React from 'react'
import test1 from '../image/course.jpg'
import Flex from '../image/github.png'
import doc from '../image/stack.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faDiscord,faTwitter,faLinkedin,faYoutube} from '@fortawesome/free-brands-svg-icons';


function Courses() {
  return (
    
<div className='raw' id='services'>
    <h1><span>ONLINE</span> COURSES</h1>

    <p>These Courses <span>are for new emerging technology </span>and subject</p>
    <p>Hope it may help you to <span>develope your skill</span></p>
<div className='body'>

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
                <p style={{color:'#3f3d3d'}}>1. linux</p>
                <p style={{color:'#3f3d3d'}}>2. Fullstack web Devlopment</p>
                <p style={{color:'#3f3d3d'}}>3. Git & Github</p>
                <p style={{color:'#3f3d3d'}}>4. Join Us</p>
                <label className="next" for="checkbox-page1">
                <FontAwesomeIcon icon={faChevronRight}/>
                </label>
            </div>
            <div className="back-page">
            <h2>Linux</h2>
                <img src={test1} alt="/" className='course' style={{display:'flex',
                    alignItems:'center',justifyContent:'center', margin:'6% auto',border:'3px solid #4173a5',
                    borderRadius:'6px',boxShadow:'0px 10px 15px 0px rgba(0, 0, 0, 0.5)'}}/>

                <a href="https://youtu.be/sWbUDq4S6Y8?si=XDs1N3Ka0kytAgu_" className='flow'><span>Button </span><i></i></a>
                <label className="prev" for="checkbox-page1">
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </label>
            </div>
        </div>
        <div className="page" id="page2">
            <div className="front-page">
                <h2>Fullstack web Devlopment</h2>
                <img src={doc} alt="/" className='course' style={{display:'flex',
                    alignItems:'center',justifyContent:'center', margin:'6% auto',border:'3px solid #1839af',
                    borderRadius:'8px',boxShadow:'0px 10px 15px 0px #1839af'}}/>

                <a href="https://youtu.be/nu_pCVPKzTk?si=bSnaun44WXVzvqlm" className='flow'><span>Button </span><i></i></a>
                <label className="next" for="checkbox-page2">
                <FontAwesomeIcon icon={faChevronRight}/>
                </label>
            </div>
       
            
            <div className="back-page">
            <h2>Git & Github</h2>
                <img src={Flex} alt="/" className='course' style={{display:'flex',
                    alignItems:'center',justifyContent:'center', margin:'6% auto',border:'3px solid #a10c8d',
                    borderRadius:'8px',boxShadow:'0px 10px 15px 0px #a10c8d'}}/>

                <a href="https://youtu.be/RGOj5yH7evk?si=VMSRhWKZotUQk80V" className='flow'><span>Button </span><i></i></a>
                
                <label className="prev" for="checkbox-page2">
                    <FontAwesomeIcon icon={faChevronLeft}/>
                    </label>
            </div>
            </div>
            
        
        <div className="page" id="page3">
            <div className="front-page">
                <h2>Join Us</h2>
                <div className="join-us">
                    <div className="join-content">
                        <h3>Discord</h3>
                    <FontAwesomeIcon className='dot1' icon={faDiscord}/>
                    

                    </div>
                    <div className="join-content">
                        <h3>Twitter</h3>
                    <FontAwesomeIcon className='dot2' icon={faTwitter}/>
                    

                    </div>
                    <div className="join-content">
                        <h3>Linkedin</h3>
                    <FontAwesomeIcon className='dot3' icon={faLinkedin}/>
                    

                    </div>
                    <div className="join-content">
                        <h3>You Tube</h3>
                    <FontAwesomeIcon className='dot4' icon={faYoutube}/>
                    

                    </div>
                </div>
                
            </div>
        </div>
        <div className="back-cover"></div>
    </div>

    </div>
  </div>



 
  
  )
}

export default Courses
