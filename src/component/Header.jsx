import React from 'react'
import Navbar from './Navbar'
import {useTypewriter,Cursor} from 'react-simple-typewriter'

function Header() {
  const [text] = useTypewriter({
    words:['Education for','Sources for'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:60
}) ;
  return (
    <div id='main'>
        <Navbar/>
        <div className='name'>
            <h1>FREE <span>{text}</span><Cursor/> All</h1>
            <p className='details'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum libero non deserunt omnis. Saepe fugit expedita aut consequuntur quae corporis reiciendis, id ullam, sapiente quod vel blanditiis possimus. Nulla, dolor!</p>
        </div>
    </div>
  )
}

export default Header