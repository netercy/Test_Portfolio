import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion";

const MotionLink = motion(Link);


const HireMe = () => {
  return (
    <div className='absolute left-4 bottom-10 flex items-center justify-center overflow-hidden '>
    <div className='w-48 h-48 flex items-center justify-center relative '>
    <div className="flex items-center justify-center">
        <MotionLink href="mailto:roham.dost.hoseini@gmail.com" target={"_blank"} className="w-20 h-20  bg-black text-white flex items-center justify-center rounded-full font-semibold hover:bg-white hover:text-black border border-solid border-black" 
        
        
        animate={{ scale: .5,scale: 1.5 }}
        transition={{ duration: 1 , repeat: Infinity , repeatDelay: .5 }}
        >Hire Me</MotionLink>
    </div>
    </div>
    </div>
  )
}

export default HireMe