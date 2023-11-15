import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { useMotionValue } from 'framer-motion'
import Lilcon from './Lilcon'

const Details = ({type, info, time, place}) => {
    const ref =useRef(null);
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between text-2xl md:w-[80%]' >
        <Lilcon reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:1.0, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2x1 sm:text-2xl xs:text-lg'>{type} </h3>
            <span className='capitalize font-medium text-dark/75 xs:text-lg'>
                {time}  |  {place}
            </span>
            <p className='font-light text-2xl w-full md:text-xl lg '> 
                {info}
            </p>
        </motion.div>
    </li>
    )
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end","center start"]
        }
    )
  return (
    <motion.div className='my-64'
    initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:1.0, type:"spring"}}
    >
        <h2 className='font-medium text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Education
        </h2>
        <div ref={ref}className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

<motion.div
 style={{scaleY: scrollYProgress}}
className="absolute left-9 top-0  h-full bg-dark origin-top w-[px] md:w-[2px] md:left-[30px] xs:left-[20px]" />
            <ul className='ml-4 xs:ml-2'>
              
                <Details 
               
type=" Bachelor of Science In Computer Science" 
time="2022-2026" place="Kabarak University"
info="Relevant courses included mathematical logic, algorithm design and analysis,
data representation and organization, programming language design and implementation,
software engineering and development, hardware architecture and engineering"

               />
               
            </ul>
        </div>
    </motion.div>
  )
}

export default Education