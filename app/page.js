"use client"
import Intro from '@/components/Loader/Intro'
import React from 'react';
import { GsapAnimation } from '@/components/Animation/Gsap';

export default function page() {

  GsapAnimation()

  return (
    <>

      {/* Importing The Intro Loader */}
      <Intro />

      <div className="h-screen w-full">

      </div>

    </>
  );
}
