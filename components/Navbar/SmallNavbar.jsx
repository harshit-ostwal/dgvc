"use client"
import { BellDot, GanttChart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import SideBar from './SideBar'

export default function SmallNavbar() {

    //Menu State Using Boolean
    const [Menu, setMenu] = useState(false);

    //Toggle True/False For Sidebar Navigation
    const Toggle = () => {
        setMenu(!Menu);
    }

    return (
        <>

            {/* Small Device Navbar / */}
            <div className="flex items-center justify-between w-full lg:hidden">

                {/* SideMenuBar Button */}
                <Link href={"/"} className="w-auto h-auto" onClick={Toggle}>
                    <GanttChart size={32} />
                </Link>

                <Link href={"/"} className="w-auto h-auto" onClick={() => setMenu(false)}>
                    {/* Logo */}
                    <Image
                        src={"/Logo/Logo2.png"}
                        width={150}
                        quality={100}
                        height={147}
                        alt='Dg Vaishnav College'
                    />
                </Link>

                {/* Notification Button */}
                <Link href={"/"} className="w-auto h-auto" onClick={() => setMenu(false)}>
                    <BellDot size={32} />
                </Link>

            </div>

            <SideBar Menu={Menu} />

        </>
    )
}
