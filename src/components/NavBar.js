import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon } from './Icons'
import {motion} from "framer-motion";
import { useState } from 'react';

const CustomLink = ({href, title, className=""}) =>{
    const router= useRouter();
    
    return(
        <Link href={href} className={`${className} relative group`}>
           {title} 
         
         <snap className={`
         h-[1px] inline-block  bg-black
         absolute left-0 -bottom-0.5
         group-hover:w-full transition-[width] ease duration-300
         ${router.asPath ===href ? 'w-full' : 'w-0'}
         `}>&nbsp;</snap>

        </Link>
    );
};

const CustomMobileLink = ({href, title, className="", toggle}) =>{
  const router= useRouter();

  const handleClick = () =>{
    toggle();

    router.push(href)
  }
  
  return(
      <button href={href} className={`${className} relative group text-light dark:text-dark`} onClick={handleClick}>
         {title} 
       
       <snap className={`
       h-[1px] inline-block  bg-black
       absolute left-0 -bottom-0.5
       group-hover:w-full transition-[width] ease duration-300
       ${router.asPath ===href ? 'w-full' : 'w-0'}
       `}>&nbsp;</snap>

      </button>
  );
};

const NavBar = () => {

   const [isOpen, setIsOpen] = useState(false);

   const handleClick =() => {

    setIsOpen(!isOpen)
   }

  return (
    <header className='w-full px-32 py-10 font-light text-lg flex items-center justify-between  relative z-10 lg:px-16 md:px-8'>


      <button className="flex-col justify-center items-center hidden lg:flex my-2"  onClick={handleClick}>
        <span className={`bg-light dark:bg-dark block h-0.5 w-6 transition-all duaration-300 ease-out rounded-sm  ${isOpen ?'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-light dark:bg-dark block h-0.5 w-6 transition-all duaration-300 ease-out rounded-sm my-0.5 ${isOpen ?'opacity-0' :'opacity-100' }`}></span>
        <span className={`bg-light dark:bg-dark block h-0.5 w-6 transition-all duaration-300 ease-outrounded-sm ${isOpen ?'-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>

      </button>
     <div className='w-full flex justify-between items-center lg:hidden'>
     <nav>
        <CustomLink href="/"  title="Home" className='mr-10'/>
        <CustomLink href="/about" title="About" className='mx-10'/>
        <CustomLink href="/projects" title="Projects" className='mx-10'/>
        
      </nav>
      
       
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a href="https://twitter.com/edgar_ruto" target={"_blank"}
        whileHover={{ y:-2}}
        whileTap={{scale:0.9}}
        className="w-10 mx-6"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a href="https://github.com/Chry-Salis" target={"_blank"}className="w-10 mx-6"
        whileHover={{ y:-2}}
        whileTap={{scale:0.9}}>
          <GithubIcon />
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/edgar-ruto-435a36259/" target={"_blank"}className="w-10 mx-6"
        whileHover={{ y:-2}}
        whileTap={{scale:0.9}}>
          <LinkedInIcon />
        </motion.a>
        
        
      </nav>
     </div>


     {
      isOpen ?

      <motion.div
      initial={{scale:0, opacity:0, x : "-50%" ,y : "-50%"}}
      animate={{scale:1, opacity:1}}
      
      className='min-w-[75vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      bg-dark/40 rounded-lg backdrop-blur-md py-32
      '>
      <nav className='flex items-center flex-col justify-center py-14'>
         <CustomMobileLink href="/"  title="Home" className='text-x1 mb-2 text-light' toggle={handleClick}/>
         <CustomMobileLink href="/about" title="About" className='text-x1 mb-2 text-light' toggle={handleClick}/>
         <CustomMobileLink href="/projects" title="Projects" className='text-x1 mb-2 text-light' toggle={handleClick}/>
         
       </nav>
        
       <nav className="flex items-center justify-center flex-wrap  mt-2 ">
         <motion.a href="https://twitter.com/edgar_ruto" target={"_blank"} className="w-10 mx-6 sm:mx-1"
         whileHover={{ y:-2}}
         whileTap={{scale:0.9}}>
           <TwitterIcon />
         </motion.a>
         <motion.a href="https://github.com/Chry-Salis" target={"_blank"}className="w-10 mx-6 bg-light rounded-full sm:mx-1"
         whileHover={{ y:-2}}
         whileTap={{scale:0.9}}>
           <GithubIcon />
         </motion.a>
         <motion.a href="https://www.linkedin.com/in/edgar-ruto-435a36259/" target={"_blank"}className="w-10 mx-6  "
         whileHover={{ y:-2}}
         whileTap={{scale:0.9}}>
           <LinkedInIcon />
         </motion.a>
         
         
       </nav>
      </motion.div>


      : null
     }
     
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
      <Logo />
      </div>
    </header>
  )
}

export default NavBar