import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import BioText from '@/components/BioText'
import React, {useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'



const AnimatedNumbers =({value}) => {
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, { duration: 200000 })
const isInView = useInView(ref, {once:true});

useEffect(() => {
  if(isInView){
    motionValue.set(value);
  }

}, [isInView, value, motionValue])
useEffect(() => {
    springValue.on("change", (latest) =>{
        if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0);
        }
    })
  
}, [springValue, value])



   return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>My | About Page</title>
        <meta name="description" content="My Description" />
      </Head>
      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <BioText className="text-white text-xl text-center py-4 mb-16 lg:!text-7xl sm:!text-6xl  sm:mb-8 md:text-6xl xs:text-4xl md:mb-16
          
          " text="Biography" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-3 md:col-span-8"> 
              <p className="font-light text-2xl lg:text-xl" >
                My name is Edgar, an upcoming web developer and UI/UX designer. I am passionate about using my skills to bring
                about measurable impact and change.
              </p>
              <p className="my-4 font-light text-2xl lg:text-xl">
                My goal is to create designs that are not only aesthetically pleasing but also functional and user-friendly. I
                believe that design is a powerful tool that can be used to communicate ideas and evoke emotions. I am committed
                to creating designs that tell stories and bring about positive change in the world.
              </p>
              <p className="font-light text-2xl lg:text-xl">
                Whether I am working on a website, mobile app, or other digital product, I bring my commitment to design
                excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my
                skills and passion to your next project.
              </p>
            </div> 
            <div className='col-span-3 flex flex-col items-end justify-between  space-y-20 xl:col-span-8 xl:flex-row x1:items-center md:order-3'>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-primary text-8xl font-bold md:text-7xl sm:text-6xl xs:text-5xl'>
                        <AnimatedNumbers value={2} />+
                    </span>
                    <h2 className=' text-4xl font-medium capitalize text-dark/75 xl:text-center md:text-3xl sm:text-2xl
                    xs:text-xl
                    '>Satisfied Clients</h2>
                </div>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block  text-primary text-8xl font-bold  md:text-7xl sm:text-6xl xs:text-5xl'>
                       <AnimatedNumbers value={2} />+
                    </span>
                    <h2 className=' text-4xl font-medium capitalize text-dark/75 xl:text-center md:text-3xl sm:text-2xl
                    xs:text-xl
                    '>Completed Projects</h2>
                </div>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-primary text-8xl font-bold md:text-7xl sm:text-6xl xs:text-5xl'>
                       <AnimatedNumbers value={2} />+
                    </span>
                    <h2 className=' text-4xl font-medium capitalize text-dark/75 xl:text-center md:text-3xl sm:text-2xl
                    xs:text-xl
                    '>Years of Experience</h2>
                </div>

            </div>
          </div>
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default about