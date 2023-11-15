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

const BioText = ({text, className=""}) => {
  return (
    <div className='w-full mx-auto pb-16 flex items-center justify-center text-center
     overflow-hidden lg:w-full lg:text-center'>
        
         <motion.h1 className={` w-full text-dark font-medium capitalize text-left text-8xl lg:w-full lg:text-center lg:text-4xl  &{className }`}
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

export default BioText