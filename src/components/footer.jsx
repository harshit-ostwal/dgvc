import React from 'react'
import { Separator } from './ui/separator';
import SocialMedia from './social-media';
import { FooterData } from '@/data/footer';
import Link from 'next/link';

function Footer() {

    const year = new Date().getFullYear();

    return (
        <div className="flex flex-col justify-between w-full gap-10 p-5 bg-yellow-300 md:p-10">

            {/* Top */}
            <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
                <div className="flex flex-col items-center justify-center gap-5 lg:flex-row">
                    <img src="/Logo/Logo.png" width={150} alt="Dg Vaishnav College" />
                    <div className="flex flex-col text-center lg:text-start">
                        <h5 className="text-lg font-bold">We Are Social</h5>
                        <h5>Empowering Minds, Enriching Lives: The College of Infinite Possibilities.</h5>
                    </div>
                </div>

                <div className="flex flex-col">
                    <h5 className="font-semibold">Subscribe to our newsletter</h5>
                    <p className="text-sm">The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <form className="flex flex-col gap-3 mt-4 lg:flex-row">
                        <input type="email" placeholder="Enter your email" className="w-full p-4 text-sm rounded-md focus:outline-none" />
                        <button type="submit" className="p-4 px-10 text-sm rounded-md">Submit</button>
                    </form>
                </div>
            </div>

            {/* Divider */}
            <Separator />

            {/* Middle */}
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {/* Column Mapping */}
                {FooterData.map((data, index) => (
                    <div key={index} className="space-y-5">
                        <h5 className="font-medium">{data.title}</h5>
                        <ul>
                            {data.subMenu.map((subData, subIndex) => (
                                <li key={subIndex} >
                                    <Link className="flex items-center gap-3 p-2 text-sm transition-all duration-200 w-fit" href={subData.subHref}><span>{subData.subIcon}</span>{subData.subTitle}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Divider */}
            <Separator />

            {/* Bottom */}
            <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">
                <p className="text-sm font-semibold text-center">Copyright © {year} - All right reserved by Harshit Ostwal.</p>

                {/* Socail Media */}
                <SocialMedia />
            </div>
        </div>
    )
}

export default Footer