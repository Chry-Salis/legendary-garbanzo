import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

export const Footer = () => {
  return (
    <footer className='text-xl font-light my-4 text-base w-full border-t-2 w-full border-solid border-dark font-light text-1g sm:text-base '>
      <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
      <div className='flex items-center'>
       Build With <span className='text-primary text-2xl px-1'>&#9825;</span> by&nbsp;<Link href="/" 
       className='underline underline-offset-2 '>Edgar Ruto</Link>
      </div>
      <span>{new Date().getFullYear()}&copy; All Rights Reserved</span>
      </Layout>
    </footer>
  )
}
