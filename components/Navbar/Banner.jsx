import { Facebook, Instagram, Mail, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import BannerData from '../data/Navbar/Banner'

export default function Banner() {
  return (
    <>

      {/* Banner Details */}
      <div className="hidden lg:flex justify-between items-center w-full p-4">

        {/* Something */}
        <div>
          asd
        </div>

        {/* Banner Links */}
        <div className="flex gap-5">

          {/* Mapping Banner Details */}
          {BannerData.map((data, index) =>

            // Mapping Links
            <Link key={index} href={data.href} className="flex justify-center font-semibold text-base gap-3">
              {data.icon}{data.title}
            </Link>

          )}

        </div>


      </div>

    </>
  )
}
