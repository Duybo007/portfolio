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
        <motion.main
        initial={{
            y: directionLeft? -200 : 200,
            opacity: 0
            }}
            whileInView={{opacity : 1, y : 0 }}
            transition={{duration: 1}}
            viewport={{once : true}}
            >skills</motion.main>
        
        <motion.div 
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
            
        

        </motion.div>
        <h1 className='p-back'>Skills</h1>
    </div>
  )
}

export default Skills