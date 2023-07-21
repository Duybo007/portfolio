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
    <div className='projects-content'>
        <h3>/ /Some Things I’ve Built.</h3>

            <ProjectCard 
                title={"Netflix Clone"}
                description={"A Netflix clone website is a streaming platform that offers a similar user experience and content selection as Netflix. Users can sign up for an account, browse and find movies and TV shows, and create personal watchlists."}
                tools={[{name:"React"}, {name:"Firebase"}, {name :"TMDB API"}, {name :"Vercel"}]}
                webLink={"https://netflix-clone-chi-rouge.vercel.app/"}
                gitLink={"https://github.com/Duybo007/netflix-clone"}
                img={"/netflix.png"}
                position={"left"}
            />

            <ProjectCard 
                title={"Restaurant Landing Page"}
                description={"A refreshed version of the website for a restaurant that includes the ability for users to easily make reservations online. This can help streamline the reservation process and improve the customer experience, making it more convenient for diners to plan their meals at the restaurant."}
                tools={[{name:"React"}, {name:"Firebase"}, {name :"Vercel"}]}
                webLink={"https://habana-phi.vercel.app/"}
                gitLink={"https://github.com/Duybo007/habana"}
                img={"/habana.png"}
                position={"right"}
            />

            <ProjectCard 
                title={"Recipe Management"}
                description={"A recipe web design allows users to create an account, search for recipes by name or ingredients, and save their favorite recipes. Users can log in to their account to access their saved recipes and browse for new ones to try."}
                tools={[{name:"Next.js"}, {name:"Firebase"}, {name :"Spoonacular API"}, {name :"Vercel"}]}
                webLink={"https://new-recipes-book.vercel.app/"}
                gitLink={"https://github.com/Duybo007/new_recipes_book"}
                img={"/recipe.png"}
                position={"left"}
            />

    </div>
    <h1 className='work-back'>Work</h1>
    </motion.div>
  )
}

export default Projects