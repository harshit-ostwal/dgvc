import Image from 'next/image'
import React from 'react'
import SocialMediaData from '../data/SocialMedia'
import Link from 'next/link'
import { DownloadCloud, Leaf, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <>

      {/* Footer Details */}
      <div id="footer" className="w-full font-Varela overflow-hidden h-full">

        {/* Footer Top Details */}
        <div id='top' className="flex items-center justify-center flex-col gap-4 w-full p-5">

          {/* Logo */}
          <Link href={"/"} className='w-auto h-auto'>
            <Image
              src={"/Logo/Logo2.png"}
              width={150}
              quality={100}
              height={147}
              alt='Dg Vaishnav College'
            />
          </Link>

          <div className="space-y-5 text-center text-backgroundForeground">

            {/* Headline */}
            <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl">We Are Social</h3>

            {/* Descrpition */}
            <p className="text-sm md:text-base lg:text-lg font-semibold">Empowering Minds, Enriching Lives: The College of Infinite Possibilities.</p>

          </div>

          {/* Social Media Icons */}
          <div className="flex gap-2 md:gap-3 lg:gap-5">

            {/* Mapping Social Media Icons */}
            {SocialMediaData.map((data, index) => (

              // Mapping Icons
              <Link key={index} href={data.href} className="bg-gradient-to-r hover:scale-105 transition-all duration-500 hover:bg-gradient-to-r hover:from-red-200 hover:to-yellow-200 from-cyan-200 to-red-200 border border-backgroundForeground px-3 py-3 rounded-full" target="_blank">{data.icon}</Link>

            ))}

          </div>


        </div>

        {/* Footer Bottom Details */}
        <div id="bottom" className="bg-gradient-to-r from-yellow-200 to-red-200 text-backgroundForeground p-6 lg:p-20 pt-10 pb-10 flex items-center justify-center">

          {/* Grid Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">

            {/* Column 1 */}
            <div id="bottom-left-1" className="flex flex-col gap-3">

              {/* Heading */}
              <h5 className="font-bold text-lg text-primaryForeground">Other Links</h5>

              {/* Mobile Details */}
              <p className="flex gap-3 text-sm md:text-base items-center"><span><Leaf size={16} color='#222222' /></span> <span>IIC</span></p>

              {/* Mail Details */}
              <p className="flex gap-3 text-sm md:text-base items-center"><span><Leaf size={16} color='#222222' /></span> <span>NAAC</span></p>

              {/* Another Mail Details */}
              <p className="flex gap-3 text-sm md:text-base items-center"><span><Leaf size={16} color='#222222' /></span> <span>NBA</span></p>

              {/* Address Details */}
              <p className="flex gap-3 text-sm md:text-base items-center"><span><Leaf size={16} color='#222222' /></span> <span>NIRF</span></p>

              {/* Address Details */}
              <p className="flex gap-3 text-sm md:text-base items-center"><span><Leaf size={16} color='#222222' /></span> <span>E - Contents</span></p>

              {/* Address Details */}
              <p className="flex gap-3 text-sm md:text-base items-center"><span><Leaf size={16} color='#222222' /></span> <span>Library</span></p>

              {/* Address Details */}
              <p className="flex gap-3 text-sm md:text-base items-center"><span><Leaf size={16} color='#222222' /></span> <span>OBE</span></p>

              {/* Address Details */}
              <p className="flex gap-3 text-sm md:text-base items-center"><span><Leaf size={16} color='#222222' /></span> <span>Extra Curricular Activities</span></p>

              {/* Address Details */}
              <p className="flex gap-3 text-sm md:text-base items-center"><span><Leaf size={16} color='#222222' /></span> <span>Feedback</span></p>

            </div>

            {/* Column 2 */}
            <div id="bottom-mid-1" className="flex flex-col gap-3">

              {/* Heading */}
              <h5 className="font-bold text-lg text-primaryForeground">Downloads</h5>

              {/* Download Details */}
              <p className="flex gap-3 text-sm md:text-base items-center"><span><DownloadCloud size={16} color='#222222' /></span> <span>Previous Year Question Papers</span></p>

              {/* Download Details */}
              <p className="flex gap-3 text-sm md:text-base items-center"><span><DownloadCloud size={16} color='#222222' /></span> <span>Academic Calendar</span></p>

            </div>

            {/* Column 3 */}
            <div id="bottom-mid-2" className="flex flex-col gap-3">

              {/* Heading */}
              <h5 className="font-bold text-lg text-primaryForeground">Students Corner</h5>

              {/* Mobile Details */}
              <p className="flex gap-3 text-sm md:text-base items-center"><span><Phone size={16} color='#222222' /></span> <span>+91 999-999-9999</span></p>

              {/* Mail Details */}
              <p className="flex gap-3 text-sm md:text-base items-center"><span><Mail size={16} color='#222222' /></span> <span>principal@dgvaishnavcollege.edu.in</span></p>

              {/* Another Mail Details */}
              <p className="flex gap-3 text-sm md:text-base items-center"><span><Mail size={16} color='#222222' /></span> <span>coe@dgvaishnavcollege.edu.in</span></p>

              {/* Address Details */}
              <p className="flex gap-3 text-sm md:text-base items-center"><span><MapPin size={16} color='#222222' /></span> <span>#833, E.V.R. Periyar High Road, Arumbakkam, Chennai – 600 106, Tamilnadu.</span></p>

            </div>

            {/* Column 4 */}
            <div id="bottom-right-1" className="flex flex-col gap-3">

              {/* Heading */}
              <h5 className="font-bold text-lg text-primaryForeground">Contact Us</h5>

              {/* Mobile Details */}
              <p className="flex gap-3 text-sm md:text-base items-center"><span><Phone size={16} color='#222222' /></span> <span>+91 999-999-9999</span></p>

              {/* Mail Details */}
              <p className="flex gap-3 text-sm md:text-base items-center"><span><Mail size={16} color='#222222' /></span> <span>principal@dgvaishnavcollege.edu.in</span></p>

              {/* Another Mail Details */}
              <p className="flex gap-3 text-sm md:text-base items-center"><span><Mail size={16} color='#222222' /></span> <span>coe@dgvaishnavcollege.edu.in</span></p>

              {/* Address Details */}
              <p className="flex gap-3 text-sm md:text-base items-center"><span><MapPin size={16} color='#222222' /></span> <span>#833, E.V.R. Periyar High Road, Arumbakkam, Chennai – 600 106, Tamilnadu.</span></p>

            </div>

          </div>

        </div>

      </div>

    </>
  )
}
