'use client';
import React from 'react';

import Content from '@/components/content';
import Footer from '@/components/footer';
import Projects from '@/components/projects';
import Whatsapp from '@/components/whatsapp';

const page = () => {
  return (
    <div className='flex flex-col w-full bg-white overflow-x-hidden '>
      <Content />
      <Projects />
      <Footer />
      <Whatsapp />
    </div>
  );
};

export default page;
