import React from 'react'
import {motion} from 'framer-motion'

const quote = {
  initial:{
    opacity:1 ,
  },
  animate:{
    opacity:1,
    transition:{
      delay:0.5,
      staggerChildren: 0.08,
    }
  }
}

const singleWord = {
  initial:{
    opacity:0,
    y:50
  },
  animate:{
    opacity:1,
    y:1,
    transition:{
      duration:1
    }
  }
}

const Explore = ({text, className=""}) => {
  return (
    <div className='font-medium text-8xl mb-32 mt-0 w-full text-center lg:w-full lg:text-center'>
        
         <motion.h1 className={` font-medium text-8xl mb-32 mt-0 w-full text-center lg:w-full lg:text-center lg:text-4xl &{className }`}
         variants={quote}
         initial="initial"
         animate="animate"
         > 
            {
                text.split(" ").map((word, index) =>
                <motion.span key={word+'-'+index} className="inline-block"
                variants={singleWord}
                >
                    {word}&nbsp;
                </motion.span>
                )
            }
         </motion.h1>
    </div>
  )
}

export default Explore