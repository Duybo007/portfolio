import React, { useEffect, useState } from 'react'
import './Contact.css'
import { motion } from "framer-motion";
import { useFormik } from 'formik';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from './Firebase';
import Modal from './Modal';
import { reservSchema } from '../schemas';

function Contact() {
	
		const [openModal, setOpenModal] = useState(false)
		const onSubmit = async( values, actions) => {
			try {
				const docRef = await addDoc(collection(db, "contact"), {
				  name: values.name,
				  email: values.email,
				  phone: values.phone,
				  message: values.message
				});
				console.log(values)
				console.log(errors)
				setOpenModal(true)
				console.log("Document written with ID: ", docRef.id);
				} catch (e) {
					console.error("Error adding document: ", e);
				}
			setOpenModal(true)
			await new Promise((resolve) => setTimeout(resolve, 1000));
        	actions.resetForm();
		}
	  const {values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit} = useFormik({
		initialValues: {
            name:"",
            email:"",
			phone:"",
			message:""
        },
		validationSchema: reservSchema,
		onSubmit
	  })
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
	<form onSubmit={handleSubmit} class="row input-container">
			<div class="contact-input">
				<div class="styled-input wide">
					<input 
					id='name'
					onChange={handleChange} 
                    value={values.name}
                    onBlur={handleBlur}
                    className={errors.name && touched.name? "input-error": ""}
					type="text"/>
					<label>Name</label> 
					{errors.name && touched.name && <p className="error">{errors.name}</p>}
				</div>
				
			</div>
			<div class="contact-input">
				<div class="styled-input">
					<input 
					id='email'
					onChange={handleChange} 
                    value={values.email}
                    onBlur={handleBlur}
                    className={errors.email && touched.email? "input-error": ""}
					type="text"/>
					<label>Email</label> 
					{errors.email && touched.email && <p className="error">{errors.email}</p>}
				</div>
				
			</div>
			<div class="contact-input">
				<div class="styled-input" style={{float:"right"}}>
					<input 
					id='phone'
					onChange={handleChange} 
                    value={values.phone}
                    onBlur={handleBlur}
                    className={errors.phone && touched.phone? "input-error": ""}
					type="text"/>
					<label>Phone Number</label> 
					{errors.phone && touched.phone && <p className="error">{errors.phone}</p>}
				</div>
				
			</div>
			<div class="contact-input">
				<div class="styled-input wide">
					<textarea
					type="text"
					id='message'
					onChange={handleChange} 
                    value={values.message}
                    onBlur={handleBlur}
                    className={errors.message && touched.message? "input-error": ""}
					></textarea>
					<label>Message</label>
					{errors.message && touched.message && <p className="error">{errors.message}</p>}
				</div>
				
			</div>
			<div class="col-xs-12">
				<button disabled={isSubmitting} type='submit' class="contact-btn">Send Message</button>
			</div>
	</form>
	{openModal && (
		<Modal open={openModal} onClose={()=>setOpenModal(false)}/>
	)}
</motion.div>

    
  )
}

export default Contact