import React from 'react'
import './Projects.css'
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
            initial={{opacity: 0,}}
            whileInView={{opacity : 1}}
            transition={{duration: 1.5}}
            viewport={{ once: true }}
    className='projects'>
        <h3>Some Things I’ve Built.</h3>
        <p className='projects-intro'>
            Check out some of my latest web design case studies.</p>
    <div className='projects-content'>
        <motion.div
            initial={{
            x: -200 ,
            opacity: 0
            }}
            whileInView={{opacity : 1, x : 0 }}
            transition={{duration: 1.5}}
            viewport={{once : true}}
        className='project'>
            <div className='project-contents'>
                <a 
                target="_blank"
                className='project-title'
                href='https://netflix-clone-chi-rouge.vercel.app/'>Netflix Clone</a>
                <p className='project-des'>
                A Netflix clone website is a streaming platform that offers a similar user experience and content selection as Netflix. Users can sign up for an account, browse and find movies and TV shows, and create personal watchlists.
                </p>
                <ul className='project-tools'>
                    <li>React</li>
                    <li>Firebase</li>
                    <li>TMDB API</li>
                    <li>Vercel</li>
                </ul>
                <a 
                target="_blank"
                href='https://netflix-clone-chi-rouge.vercel.app/' className='project-link'>Website</a>
            </div>
            <a 
            target="_blank"
            href='https://netflix-clone-chi-rouge.vercel.app/'
            className='link'><img className='project-img' src='/netflix.png' /></a>
        </motion.div>
        <motion.div 
            initial={{
            x: 200 ,
            opacity: 0
            }}
            whileInView={{opacity : 1, x : 0 }}
            transition={{duration: 1.5}}
            viewport={{once : true}}
        className='project left'>
            <div className='project-contents-rev'>
                <a 
                target="_blank"
                className='project-title'
                href='https://habana-phi.vercel.app/'>Restaurant Landing Page</a>
                <p className='project-des des-rev'>
                A refreshed version of the website for a restaurant that includes the ability for users to easily make reservations online. This can help streamline the reservation process and improve the customer experience, making it more convenient for diners to plan their meals at the restaurant.
                </p>
                <ul className='project-tools'>
                    <li>Next.js</li>
                    <li>Firebase</li>
                    <li>Vercel</li>
                </ul>
                <a 
                target="_blank"
                href='https://habana-phi.vercel.app/' className='project-link'>Website</a>
            </div>
            <a 
                className='link-left'
                target="_blank"
                href='https://habana-phi.vercel.app/'>
            <img className='project-img' src='/habana.png' /></a>
        </motion.div>
    </div>
    <h1 className='work-back'>Work</h1>
    </motion.div>
  )
}

export default Projects