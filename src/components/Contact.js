import React from 'react'
import './Contact.css'
import { motion } from "framer-motion";

function Contact() {
  return (
    
<motion.div 
initial={{opacity: 0,}}
whileInView={{opacity : 1}}
transition={{duration: 1.5}}
viewport={{ once: true }}
class="contact-container">
	<div class="row">
			<h1>Contact</h1>
	</div>
	<div class="row">
			<h4 style={{textAlign:"center"}}>I'd love to hear from you!</h4>
	</div>
	<form class="row input-container">
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input type="text" required />
					<label>Name</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input">
					<input type="text" required />
					<label>Email</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input" style={{float:"right"}}>
					<input type="text" required />
					<label>Phone Number</label> 
				</div>
			</div>
			<div class="col-xs-12">
				<div class="styled-input wide">
					<textarea required></textarea>
					<label>Message</label>
				</div>
			</div>
			<div class="col-xs-12">
				<button class="contact-btn">Send Message</button>
			</div>
	</form>
	<h5 className='overlay'>@</h5>
	
</motion.div>

    
  )
}

export default Contact