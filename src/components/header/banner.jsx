import { BannerData } from '@/data/header/banner'
import Link from 'next/link'
import React from 'react'

function Banner() {
  return (
    <div className="items-center justify-between hidden p-3 lg:flex">
      <div>
        asds
      </div>
      <div className="flex gap-5">
        {BannerData.map((data, index) => (
          <Link key={index} href={data.href} className="flex items-center justify-center gap-2 font-medium"><span>{data.icon}</span>{data.title}</Link>
        ))}
      </div>
    </div>
  )
}

export default Banner