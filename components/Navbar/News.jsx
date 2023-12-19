import React from 'react';
import NewsData from '../data/Navbar/News'
import Marquee from 'react-fast-marquee';
import Link from 'next/link';

export default function News() {

  // Today's Date
  const todayDate = new Date();

  return (
    <>

      {/* Important News Details */}
      <div className="w-full flex z-10 p-2 bg-gradient-to-r from-yellow-200 to-red-200 animate-fade text-secondaryLight font-Varela font-semibold items-center justify-around">

        {/* Important News Label */}
        <h1 className="bg-background text-backgroundForeground rounded-lg p-3 text-xs sm:text-sm leading-none md:text-base animate-fade-in-left">Important News</h1>

        {/* Important News Details */}
        <div className="w-[60%] sm:w-[70%] md:w-[80%] lg:w-[85%] 2xl:w-[90%]">

          {/* Marquee Animations */}
          <Marquee loop={0} delay={0} speed={20}>

            {/* Mapping Marquee Text */}
            {NewsData.map((data) => {

              // Convert data.date to a Date object
              const newsDate = new Date(data.date);

              // Checking Date & Displaying News Data
              if (newsDate <= todayDate) {

                return (

                  // Returning The Data
                  <Link href={data.href} key={data.id} className="flex gap-3 duration-500 transition mr-40 lg:pr-[500px] animate-fade-in text-sm sm:text-base md:text-lg items-center">

                    {/* Icon */}
                    {data.icon}

                    {/* News */}
                    {data.news}

                  </Link>

                )
              }

            })}

          </Marquee>

        </div>

      </div>

    </>
  )
}
