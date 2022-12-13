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
        <div className='project'>
            <div 
        
            className='project-contents'>
                <a 
                target="_blank"
                href='https://netflix-clone-chi-rouge.vercel.app/'><h2 className='project-title'>Netflix Clone</h2></a>
                <p className='project-des'>
                    A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
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
            <img className='project-img' src='/netflix.png' />
        </div>

        <div className='project left'>
            <div className='project-contents-rev'>
                <a 
                target="_blank"
                href='https://habana-phi.vercel.app/'><h2 className='project-title'>Restaurant Landing Page</h2></a>
                <p className='project-des des-rev'>
                    A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
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
            <img className='project-img' src='/habana.png' />
        </div>
    </div>
    
    </motion.div>
  )
}

export default Projects