import React from 'react';
import News from './news';
import Banner from './banner';
import SocialMedia from '../social-media';
import { GanttChart } from 'lucide-react';
import Image from 'next/image';

function Navbar() {
  return (
    <nav>
      {/* Banner */}
      <Banner />

      {/* News */}
      <News />

      {/* Logo & Menu */}
      <MobileMenu />
      <LargeMenu />
    </nav>
  );
}

export default Navbar;

export const MobileMenu = () => (
  <div className="flex items-center justify-between p-2 xl:hidden">
    <div className="flex items-center justify-center gap-2">
      <GanttChart size={32} />
      <Image src="/Logo/Logo.png" alt="Dg Vaishnav College" width={120} height={117} quality={100} loading="lazy" />
    </div>
  </div>
);

export const LargeMenu = () => (
  <div className="items-center justify-between hidden px-10 py-2 pb-20 xl:flex">
    <Image src="/Logo/Dgvc Banner Logo.png" alt="Dg Vaishnav College" width={800} height={150} quality={100} loading="lazy" />
    <div className="flex gap-5">
      <SocialMedia />
    </div>
  </div>
);