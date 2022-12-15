import React, { useEffect, useState } from 'react'
import './Modal.css'
import Confetti from "react-confetti";

function Modal({open, onClose}) {
    const [pieces, setPieces] = useState(200);
    const stopConfetti = () => {
        setTimeout(() => {
          setPieces(0);
        }, 3000);
      };
    
      useEffect(() => {
        stopConfetti();
      }, []);
      if(!open) return null
  return (
    <div onClick={onClose} className='modal'>
        <div onClick={(e)=>{
            e.stopPropagation()
        }} className='modalContainer'>
            <img src='/thankyou.jpg' alt='contact img'/>
            <p>Your message has been received. I will get back to you as soon as I can!</p>
        </div>
        <Confetti gravity={0.2} numberOfPieces={pieces} />
    </div>
  )
}

export default Modal