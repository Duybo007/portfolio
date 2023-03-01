import React from 'react'
import './Projects.css'
import { motion } from "framer-motion";
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <motion.div
            initial={{opacity: 0,}}
            whileInView={{opacity : 1}}
            transition={{duration: 1.5}}
            viewport={{ once: true }}
            className='projects'>
        {/* <h3>Some Things I’ve Built.</h3> */}
        <main>projects</main>
        <p className='projects-intro'>
            Check out some of my latest web design case studies.</p>
    <div className='projects-content'>
        {/* <div>
            <ProjectCard/>
        </div> */}
        {/* <motion.div 
                initial={{x: 200, opacity: 0 }}
                whileInView={{opacity : 1, x : 0 }}
                transition={{duration: 1.5}}
                viewport={{once : true}}
                className='project left'>
                <div className='project-contents-rev'>
                    <a 
                    target="_blank"
                    className='project-title'
                    href='https://dall-e-clone-sable.vercel.app/'>DALL-E Clone</a>
                    <p className='project-des des-rev'>
                    A DALL-E clone MERN app is a web application that replicates the functionality of OpenAI's DALL-E AI system, using MongoDB, Express, React, and Node.js to generate custom images based on textual descriptions and provide a user-friendly interface, efficient processing, and scalable storage. The app is designed for scalability and flexibility, allowing for high-volume usage and the addition of new features.
                    </p>
                    <ul className='project-tools'>
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>React</li>
                        <li>Node</li>
                        <li>Tailwind CSS</li>
                    </ul>
                    <div className='project-links'>
                        <a 
                        target="_blank"
                        href='https://dall-e-clone-sable.vercel.app/' className='project-link'>Deploy</a>
                        <a
                        target="_blank"
                        href='https://github.com/Duybo007/dall-e-clone' className='project-link git'>GitHub</a>
                    </div>
                </div>
                <a 
                    className='link-left'
                    target="_blank"
                    href='https://dall-e-clone-sable.vercel.app/'>
                <img className='project-img' src='/dalle.png' /></a>
            </motion.div> */}
            
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
                    <div className='project-links'>
                        <a 
                        target="_blank"
                        href='https://netflix-clone-chi-rouge.vercel.app/' className='project-link'>Website</a>
                        <a
                        target="_blank"
                        href='https://github.com/Duybo007/netflix-clone' className='project-link git'>GitHub</a>
                    </div>
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
                    <div className='project-links'>
                        <a 
                        target="_blank"
                        href='https://habana-phi.vercel.app/' className='project-link'>Website</a>
                        <a
                        target="_blank"
                        href='https://github.com/Duybo007/habana' className='project-link git'>GitHub</a>
                    </div>
                </div>
                <a 
                    className='link-left'
                    target="_blank"
                    href='https://habana-phi.vercel.app/'>
                <img className='project-img' src='/habana.png' /></a>
            </motion.div>

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
                    href='https://new-recipes-book.vercel.app/'>Recipe Website</a>
                    <p className='project-des'>
                    A recipe web design allows users to create an account, search for recipes by name or ingredients, and save their favorite recipes. Users can log in to their account to access their saved recipes and browse for new ones to try.
                    </p>
                    <ul className='project-tools'>
                        <li>Next.js</li>
                        <li>Firebase</li>
                        <li>Spoonacular API</li>
                        <li>Vercel</li>
                    </ul>
                    <div className='project-links'>
                        <a 
                        target="_blank"
                        href='https://new-recipes-book.vercel.app/' className='project-link'>Website</a>
                        <a
                        target="_blank"
                        href='https://github.com/Duybo007/new_recipes_book' className='project-link git'>GitHub</a>
                    </div>
                </div>
                <a 
                target="_blank"
                href='https://new-recipes-book.vercel.app/'
                className='link'><img className='project-img' src='/recipe.png' /></a>
            </motion.div>
    </div>
    <h1 className='work-back'>Work</h1>
    </motion.div>
  )
}

export default Projects