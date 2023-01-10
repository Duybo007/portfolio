import React, { useState } from 'react'
import './About.css'
import { motion } from "framer-motion";

function About() {

  return (
    <motion.div
                initial={{opacity: 0,}}
                whileInView={{opacity : 1}}
                transition={{duration: 1.5}}
                viewport={{ once: true }}
                className='about'>
        <div className='contents'>
            <div className='contents-about'>
                {/* <h3 className="about-me">About Me.</h3> */}
                <main>about me</main>
                <p>
                    I <span>Design</span> & <span>Develop</span> for the Web. 
                    Hello! My name is Duy Ngo and I am a junior front-end developer with a passion for creating intuitive and engaging user experiences. With my skills in HTML, CSS, and JavaScript, I can build responsive and interactive websites that not only look great, but also provide a seamless user experience on all devices. </p>
                    <br/>
                    <p>I am also proficient in responsive design and have experience working with popular front-end frameworks such as React and Nextjs. With my passion for problem-solving and attention to detail, I am confident in my ability to deliver high-quality web development solutions for all my projects.
                    I am eager to learn and grow in this field, and I believe I would be a valuable addition.
                </p>
            </div>
            <div className='contents-img'>s
                <img src='/me.png' alt='about me'/>
            </div>
        </div>
    </motion.div>
  )
}

export default About