import React from 'react'
import './Skills.css'
import { motion } from "framer-motion";

function Skills({directionLeft}) {
  return (
    <div className='skills'>
        {/* <motion.h3
            initial={{
            y: directionLeft? -200 : 200,
            opacity: 0
            }}
            whileInView={{opacity : 1, y : 0 }}
            transition={{duration: 1}}
            viewport={{once : true}}
        >What I Can Do.</motion.h3> */}
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
                <h4>Front-end Developer <span><a target="_blank" href='https://rezrva.com/'>@ Rezrva</a></span></h4>
                <p>March 2023 - Present</p>
                <div className='exp-des'>
                    <p>Developed new components and improved existing features of the B2B SaaS application.</p>
                    <p>Initiated the development of Rezrva's public-facing marketplace, integrating data from the SaaS application.</p>
                    <p>Optimized the onboarding component, leading to a remarkable 700% increase in conversions and trial signups.</p>
                    <p>Collaborated with team members to plan and design innovative features.</p>
                    <p>Actively participated in code reviews, enhancing code quality and refining development processes.</p>
                </div>
        </motion.div>
        {/* <motion.div 
        className='skills-list'>
            <motion.div
                initial={{
                y: directionLeft? -200 : 200,
                opacity: 0
                }}
                whileInView={{opacity : 1, y : 0 }}
                transition={{duration: 1}}
                viewport={{once : true}}
            >
                <h2>Front-end</h2>
                <div className='skills-list-container'>
                    <div class="container">
                        <div class="card">
                            <div class="front">
                                <img src='/java.png' alt='skill-img'/>
                                <p>Javascript</p>
                            </div>
                            <div class="back">
                                <h1>Proficient</h1>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="card">
                            <div class="front">
                                <img src='/html.png' alt='skill-img'/>
                                <p>HTML</p>
                            </div>
                            <div class="back">
                                <h1>Proficient</h1>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="card">
                            <div class="front">
                                <img src='/css.png' alt='skill-img'/>
                                <p>CSS</p>
                            </div>
                            <div class="back">
                                <h1>Proficient</h1>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="card">
                            <div class="front">
                                <img src='/react.png' alt='skill-img'/>
                                <p>React</p>
                            </div>
                            <div class="back">
                                <h1>Proficient</h1>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="card">
                            <div class="front">
                                <img src='/redux.png' alt='skill-img'/>
                                <p>Redux</p>
                            </div>
                            <div class="back">
                                <h1>Intermediate</h1>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="card">
                            <div class="front">
                                <img src='/next.png' alt='skill-img'/>
                                <p>Next</p>
                            </div>
                            <div class="back">
                                <h1>Proficient</h1>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="card">
                            <div class="front">
                                <img src='/tailwind.png' alt='skill-img'/>
                                <p>Tailwind</p>
                            </div>
                            <div class="back">
                                <h1>Intermediate</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{
                y: directionLeft? -200 : 200,
                opacity: 0
                }}
                whileInView={{opacity : 1, y : 0 }}
                transition={{duration: 1}}
                viewport={{once : true}}>
                <h2>Back-end</h2>
                <div className='skills-list-container'>
                    <div class="container">
                        <div class="card">
                            <div class="front">
                                <img src='/python.png' alt='skill-img'/>
                                <p>Python</p>
                            </div>
                            <div class="back">
                                <h1>Intermediate</h1>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="card">
                            <div class="front">
                                <img src='/flask.png' alt='skill-img'/>
                                <p>Flask</p>
                            </div>
                            <div class="back">
                                <h1>Intermediate</h1>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="card">
                            <div class="front">
                                <img src='/firebase.png' alt='skill-img'/>
                                <p>Firebase</p>
                            </div>
                            <div class="back">
                                <h1>Intermediate</h1>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="card">
                            <div class="front">
                                <img src='/node.png' alt='skill-img'/>
                                <p>Node</p>
                            </div>
                            <div class="back">
                                <h1>Intermediate</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{
                y: directionLeft? -200 : 200,
                opacity: 0
                }}
                whileInView={{opacity : 1, y : 0 }}
                transition={{duration: 1}}
                viewport={{once : true}}>
                <h2>Other</h2>
                <div className='skills-list-container'>
                    <div class="container">
                        <div class="card">
                            <div class="front">
                                <img src='/figma.png' alt='skill-img'/>
                                <p>Figma</p>
                            </div>
                            <div class="back">
                                <h1>Intermediate</h1>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="card">
                            <div class="front">
                                <img src='/git.png' alt='skill-img'/>
                                <p>Git</p>
                            </div>
                            <div class="back">
                                <h1>Intermediate</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            
        

        </motion.div> */}
    </div>
  )
}

export default Skills