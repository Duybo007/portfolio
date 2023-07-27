import React, { useEffect, useState } from 'react'
import {AiOutlineMenu} from "react-icons/ai"
import {MdOutlineRestaurantMenu} from "react-icons/md"
import './Navbar.css'

function Navbar() {

    useEffect(()=>{
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
    } else {
    document.getElementById("nav").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
    }
  }, [])  

  const [active, setActive] = useState(false)
  return (
    <div className='navbar' id='nav'>
        <div className='navbar-logo'>
            <a href='#top'><img src='/logo.png' alt='logo'/></a>
        </div>

        <ul className='navbar-links'>
            <li className='p__opensans'><a href='#about'>/ / About</a></li>
            {/* <li className='p__opensans'><a href='#skills'>/ / Experience</a></li> */}
            <li className='p__opensans'><a href='#projects'>/ / Experience</a></li>
            <li className='p__opensans'><a href='#contact'>/ / Contact</a></li>
            <li className='p__opensans resume'><a target="_blank" href='https://drive.google.com/file/d/17CU0lmAISTHFzPWE9KJs8SL0a3Yj6j1L/view?usp=sharing'>Resume</a></li>
        </ul>
        <AiOutlineMenu onClick={()=>setActive(true)} className='btn'/>
        <div className={`wrapper ${active? "active" : ""}`}>
            <MdOutlineRestaurantMenu className='btn close' onClick={()=>setActive(false)}/>
            <ul className='links-small'>
                <li onClick={()=>setActive(false)} className='p__opensans'><a href="#about">About</a></li>
                {/* <li onClick={()=>setActive(false)} className='p__opensans'><a href="#skills">Experience</a></li> */}
                <li onClick={()=>setActive(false)} className='p__opensans'><a href="#projects">Experience</a></li>
                <li onClick={()=>setActive(false)} className='p__opensans'><a href="#contact">Contact</a></li>
                <li onClick={()=>setActive(false)} className='p__opensans'><a target="_blank" href="https://drive.google.com/file/d/17CU0lmAISTHFzPWE9KJs8SL0a3Yj6j1L/view?usp=sharing">Resume</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar