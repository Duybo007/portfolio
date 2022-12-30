import React from 'react'
import './Hero.css'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion";

function Hero() {
    const [text, count] = useTypewriter({
        words: ["I'm a web developer",
    "UI/UX designer",
    "I make websites come alive"],
    loop: true,
    delaySpeed: 2000,
    })
  return (
    <div 
    className='hero'>
        <motion.div
        initial={{
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5
        }}
        className='intro'>
            <h2>Hi, my name is</h2>
            <h1 className='intro-name'>Duy Ngo.</h1>
            <h3>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#15DB95' /> 
            </h3>
            <p className='p__opensans des'>
                Front-end developer who cares deeply about user experience. Serious passion for creating user-friendly, visually appealing websites and applications.</p>
        </motion.div>
        <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </div>
  )
}

export default Hero