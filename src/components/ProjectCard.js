import React from 'react'
import './ProjectCard.scss'
import { motion } from "framer-motion";

function ProjectCard({title, description, tools, webLink, gitLink, img, position, work}) {
  return (
    <motion.div
    initial={position === "left" ? {x:-200, opacity: 0} : {x:200, opacity: 0}}
    whileInView={{opacity : 1, x : 0 }}
    transition={{duration: 1.5}}
    viewport={{once : true}}
    className={`project-${position}`}>
      <div className={`project-contents-${position}`}>
        <a
        target='_blank'
        className='card-title'
        href={webLink}
        >{title}</a>
        <p className={`project-des-${position}`}>{description}</p>
        <ul className='project-tools'>
          {tools.map(item => (
              <li key={item.name}>{item.name}</li>
              ))}
        </ul>
        <div className='links'>
            <a
            target="_blank"
            href={webLink}
            className='link'>
              Visit Website
            </a>
            <a
            target="_blank"
            href={gitLink}
            className='link git'>
              {work ? "App" : "GitHub"}
            </a>
        </div>
      </div>
      <a
      target="_blank"
      href={webLink}
      className={`img-link-${position}`}
      >
        <img className='img' src={img}/>
      </a>
    </motion.div>
  )
}

export default ProjectCard