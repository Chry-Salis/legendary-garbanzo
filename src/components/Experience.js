import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { useMotionValue } from 'framer-motion'
import Lilcon from './Lilcon'

const Details = ({position,company, companyLink, time, address, work}) => {
    const ref =useRef(null);
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between text-2xl md:w-[80%]' >
        <Lilcon reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:1.0, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2x1 sm:text-2xl xs:text-lg'>{position}&nbsp;<a href={companyLink}
            target="_blank"
            className='text-primary capatilize text-2x1'
            >@{company}</a> </h3>
            <span className='capitalize font-medium text-dark/75 xs:text-xl'>
                {time}  |  {address}
            </span>
            <p className='font-light text-2xl w-full md:text-xl'> 
                {work}
            </p>
        </motion.div>
    </li>
    )
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end","center start "]
        }
    )
  return (
    <motion.div className='my-64'
    initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:1.0, type:"spring"}}
    >
        <h2 className='font-medium text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Experience
        </h2>
        <div ref={ref}className='w-[75%] mx-auto relative  lg:w-[90%] md:w-full'>

<motion.div
 style={{scaleY: scrollYProgress}}
className="absolute left-9 top-0  h-full bg-dark origin-top w-[px] md:w-[2px] md:left-[30px] xs:left-[20px]" />
            <ul className='ml-4 xs:ml-2'>
              
                <Details 
               
position=" Remote Intern" company="AccessWash"
companyLink="https://www.accesswash.org"
time="2023-Present" address="Nakuru, KE"
work="My tasks included mapping out the status and impact
of WASH interventions, assisting in the construction and rehabilitation of WASH facilities,
facilitating knowledge sharing and collaboration between various stakeholders, conducting relevant
research, and handling communications."

               />
               
            </ul>
        </div>
    </motion.div>
  )
}

export default Experience 