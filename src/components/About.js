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
                    My name is Duy, and I have a genuine passion for crafting captivating creations on the web. My fascination with web development sparked when I delved into the realm of coding, and even a simple endeavor like crafting a custom reblog button enlightened me about the power of HTML and CSS. This revelation inspired me to explore further.
                </p>
                <p>Since then, my journey has been an exhilarating one. I've had the incredible opportunity to contribute my skills and expertise to a dynamic startup environment. Presently, my primary focus revolves around the development of accessible and inclusive products, as well as creating immersive digital experiences at <span><a target="_blank" href='https://rezrva.com/'>Rezrva</a></span>. Every day, I embrace the chance to expand my knowledge and continuously evolve in this ever-evolving field.
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