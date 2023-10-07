import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div id='main'>
        <Navbar/>
        <div className='name'>
            <h1>FREE <span>Education For</span> All</h1>
            <p className='details'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum libero non deserunt omnis. Saepe fugit expedita aut consequuntur quae corporis reiciendis, id ullam, sapiente quod vel blanditiis possimus. Nulla, dolor!</p>
        </div>
    </div>
  )
}

export default Header