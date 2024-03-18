import { NewsData } from '@/data/header/news'
import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'

function News() {

  const todayDate = new Date().toISOString().substring(0, 10);

  return (
    <div className="flex p-2 background">
      <h1 className="p-3 text-sm font-bold leading-none bg-white rounded-lg sm:text-sm md:text-base shrink-0">Important News</h1>
      <Marquee loop={0} delay={0} speed={20}>

        {NewsData.filter(data => todayDate <= data.expirydate).map((data, index) => (
          <Link href={data.href} key={index} className="flex items-center text-sm sm:text-base md:text-lg capitalize gap-3 pr-40 lg:pr-[500px] font-medium">
            <span>{data.icon}</span>
            {data.news}
          </Link>
        ))}


      </Marquee>
    </div>
  )
}

export default News