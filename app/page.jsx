import About from '@/components/about/About'
import Top from '@/components/landing/Top'
import Project from '@/components/projects/Project'
import Services from '@/components/services/Services'
import React from 'react'

const Page = () => {
  return (
    <main className='w-full min-h-screen  pt-[8rem] bg-slate-100 '>
      <Top/>
      <About/>
      <Services/>
      <Project/>
    </main>
  )
}

export default Page