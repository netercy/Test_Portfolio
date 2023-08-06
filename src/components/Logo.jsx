import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion";


const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
        <MotionLink href="/" className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full text-5xl font-bold" 
        initial={{
          rotate: 359,
        }}
        whileHover={{
          rotate: [1],
          scale:1.3,
        }}>R</MotionLink>
    </div>
  )
}

export default Logo