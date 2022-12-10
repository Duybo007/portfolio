import React, { useState } from 'react'
import './About.css'
import { motion } from "framer-motion";

function About() {

  return (
    <div className='about'>
        

        <div className='contents'>
            <div className='contents-about'>
            <motion.h3
                initial={{opacity: 0,}}
                whileInView={{opacity : 1}}
                transition={{duration: 1.5}}
                viewport={{ once: true }}
                className="about-me"
                >About Me.</motion.h3>
                <motion.p
                initial={{opacity: 0,}}
                whileInView={{opacity : 1}}
                transition={{duration: 1.5}}
                viewport={{ once: true }}
                >
                    I <span>Design</span> & <span>Develop</span> for the Web. I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                </motion.p>
            </div>
            <div className='contents-img'>
                <motion.img
                initial={{
                    opacity: 0,
                }}
                whileInView={{ opacity: 1}}
                viewport={{once : true}}
                transition={{
                    duration: 1.5
                }}
                src='/me.png' alt='about me'/>
            </div>
            
        </div>
    </div>
  )
}

export default About