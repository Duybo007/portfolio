import React from 'react'
import './Hero.css'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion";

function Hero() {
    const [text, count] = useTypewriter({
        words: ["I'm a Front-end developer",
    "React/Angular developer",
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
            I am an artist of the digital canvas, weaving creativity and code into captivating web experiences that leave a lasting impact. With an unwavering commitment to innovation and user-centric design, I bring imagination to life, one line of code at a time.</p>
            <a href='#projects' className='btn-work'>Check out my work!</a>
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