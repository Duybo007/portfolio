import React from 'react'
import './Skills.css'
import { motion } from "framer-motion";

function Skills({directionLeft}) {
  return (
    <div className='skills'>
        <div className='skills-content'>
            <motion.h3
            initial={{
                y: directionLeft? -200 : 200,
                opacity: 0
                }}
                whileInView={{opacity : 1, y : 0 }}
                transition={{duration: 1}}
                viewport={{once : true}}
                >/ /Where I’ve Worked</motion.h3>
            <motion.div
            initial={{
                y: directionLeft? -200 : 200,
                opacity: 0
                }}
                whileInView={{opacity : 1, y : 0 }}
                transition={{duration: 1}}
                viewport={{once : true}} className='experience'>
                    <h4><span className='title'>Front-end Developer</span> <span><a target="_blank" href='https://rezrva.com/'>@ Rezrva</a></span></h4>
                    <p>March 2023 - Present</p>
                    <ul className='exp-des'>
                        <li>Developed new components and improved existing features of the B2B SaaS application.</li>
                        <li>Initiated the development of Rezrva's public-facing marketplace, integrating data from the SaaS application.</li>
                        <li>Optimized the onboarding component, leading to a remarkable 700% increase in conversions and trial signups.</li>
                        <li>Collaborated with team members to plan and design calendar feature.</li>
                        <li>Actively participated in code reviews, enhancing code quality and refining development processes.</li>
                    </ul>
            </motion.div>
        </div>
    </div>
  )
}

export default Skills