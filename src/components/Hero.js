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
    className='hero'>
        <div className='intro'>
            <h2>Hi, my name is</h2>
            <h1 className='intro-name'>Duy Ngo.</h1>
            <h3>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AB0A' /> 
            </h3>
            <p className='p__opensans'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
        </div>
    </motion.div>
  )
}

export default Hero