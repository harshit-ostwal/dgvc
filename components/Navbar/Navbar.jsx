"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Slant as Hamburger } from 'hamburger-react'
import News from './News'

export default function Navbar() {

    const [isOpen, setOpen] = useState(false);

    return (

        <>

            {/* Navbar Details */}
            <div id="navbar" className="h-full w-full gap-3 z-[90] p-4 overflow-hidden">

                <nav className="flex justify-between items-center lg:pr-5 lg:pl-5">

                    {/* Logo */}
                    <Link id="logo" href={"/"} className="hidden lg:flex">

                        <Image
                            src={"/Logo/Logo.png"}
                            width={900}
                            height={135}
                            quality={100}
                            alt="Dg Vaishnav College"
                        />

                    </Link>

                    {/* Logo */}
                    <Link id="logo" href={"/"} className="flex lg:hidden">

                        <Image
                            src={"/Logo/Logo2.png"}
                            width={120}
                            height={117}
                            quality={100}
                            alt="Dg Vaishnav College"
                        />

                    </Link>


                    {/* Menu Icon */}
                    <div id="menuIcon" className="flex gap-2 items-center text-backgroundForeground">

                        {!isOpen ?
                            <>
                                <h6 onClick={() => setOpen(true)} className="cursor-pointer font-Varela font-semibold">MENU</h6>
                            </> : <>
                                <h6 onClick={() => setOpen(false)} className="cursor-pointer font-Varela font-semibold">CLOSE</h6>
                            </>
                        }

                        <Hamburger color="#222222" duration={0.8} size={32} rounded toggled={isOpen} toggle={setOpen} />

                    </div>

                </nav>

            </div>

            {/* News */}
            <News />

        </>
    )
}
