import React, { useState } from 'react'
import './About.css'
import { motion } from "framer-motion";

function About() {

  return (
    <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{opacity : 1, x : 0 }}
                transition={{duration: 1.5}}
                viewport={{ once: true }}
                className='about'>
        <div className='contents'>
            <div className='contents-about'>
                {/* <h3 className="about-me">About Me.</h3> */}
                {/* <main>about me</main> */}
                <h3>/ /About Me</h3>
                <p>
                    I <span>Design</span> & <span>Develop</span> for the Web. 
                    My name is Duy, and I'm deeply passionate about crafting captivating creations on the web. I discovered my love for web development when I began coding and realized the immense power of HTML and CSS, even in simple tasks like creating a custom reblog button. This inspired me to delve deeper into the world of web development.
                </p>
                <p>Since then, I've been on an exhilarating journey, contributing my skills to a dynamic startup environment. Currently, at <span><a target="_blank" href='https://rezrva.com/'>Rezrva</a></span>, my focus is on developing inclusive products and immersive digital experiences. Every day, I seize the opportunity to expand my knowledge and evolve in this ever-changing field.
                </p>
                <p>Here are a few technologies I’ve been working with recently:</p>
                <div className='contents-list'>
                    <ul>
                        <li><span className='bullet'>➤</span> JavaScript (ES6+)</li>
                        <li><span className='bullet'>➤</span> React</li>
                        <li><span className='bullet'>➤</span> NextJs</li>
                        <li><span className='bullet'>➤</span> Figma</li>
                    </ul>
                    <ul>
                        <li><span className='bullet'>➤</span> Typescript</li>
                        <li><span className='bullet'>➤</span> Angular</li>
                        <li><span className='bullet'>➤</span> NextJs</li>
                        <li><span className='bullet'>➤</span> Firebase</li>
                    </ul>
                </div>
            </div>
            <div className='contents-img'>
                <img src='/me.png' alt='about me'/>
            </div>
        </div>
    </motion.div>
  )
}

export default About