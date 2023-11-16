import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import Explore from '@/components/Explore'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import portfolio from '../../public/images/projects/Screenshot from 2023-11-14 03-12-36.png';
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const FeaturedProject =({type, image, summary, link, title, github}) =>{

  return (

    <motion.article className='w-full flex items-center justify-between relative
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    '
    initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:1.0, type:"spring", ease:"easeInOut"}}
        viewport={{once:true}}
    >
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103% rounded-[2.5rem] bg-dark rounded-br-3xl]' />
     

      <Link href={link} target="_blank"
      className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
      >
        <FramerImage src={portfolio} alt={title} className='w-full h-auto'
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        priority
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw, 50vw"

        /> 
      
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-6 lg:pt-6'>
        <span className='text-primary font-medium text-3xl xs:text-2xl'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2k'>
          <h2 className='text-4xl font-medium my-2 text-left w-full sm:text-sm xs:text-xl'>{title}</h2>
        </Link>
        <p className='text-2xl font-light text-dark my-2 xs:text-xl'>{summary}</p>
        <div className='mt-2 flex items-center'>
        <Link href={github} target="_blank" className='w-10'> <GithubIcon /></Link>
        <Link href={link} target="_blank" className='text-2xl font-light
        ml-4 rounded-lg bg-dark text-light p-2 px-6 sm:px-4 sm:text-base
        '> Visit Project</Link>
        </div>
      </div>
    </motion.article>
  )
}

const projects = () => {
  return (
    <>
       <Head>
        <title>Explore | Projects</title>
        <meta name="description" content="My Description" />
      </Head>
      <TransitionEffect />
      <main>
        <Layout>
         <h2 className='font-medium text-8xl mb-32 w-full text-center sm:mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl'>
            <Explore text='Explore' />
         </h2>
         <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
          <div className='col-span-12'>
             <FeaturedProject 
title="Web-Portfolio"
summary="A Feature-rich Portfolio that leverages React for interactive UIs, Next.js for efficient 
and SEO-friendly rendering, and Tailwind CSS for custom styling."
link="/"
image="img"
type="Featured Project"
github="https://github.com/Chry-Salis/legendary-garbanzo"
             />
          </div>

         </div>
        </Layout>
      </main>
    </>
  )
}

export default projects