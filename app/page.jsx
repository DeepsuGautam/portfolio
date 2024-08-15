import About from '@/components/about/About';
import Top from '@/components/landing/Top';
import Project from '@/components/projects/Project';
import Services from '@/components/services/Services';
import React from 'react';

const Page = async () => {
  return (
    <main className='w-full min-h-screen pt-[8rem] bg-slate-100'>
      <Top />
      <About />
      <Services />
      <Project />
    </main>
  );
};

// Revalidate on every request (dynamic)
export const revalidate = 0;

export default Page;
