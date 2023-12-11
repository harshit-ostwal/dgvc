import Image from 'next/image'
import React from 'react'
import News from './News'
import Menu from './Menu'
import Banner from './Banner'
import Link from 'next/link'

export default function Navbar() {

    return (
        <>

            {/* Navbar Details */}
            <div id='navbar' className="w-full h-full flex flex-col">

                {/* Importing Banner */}
                <Banner />

                {/* Importing News */}
                <News />

                <div className="flex justify-center items-center overflow-hidden p-2">

                    <Link href={"/"} className="hidden lg:flex">
                        {/* Logo */}
                        <Image
                            src={"/Logo/Logo.png"}
                            width={900}
                            quality={100}
                            height={135}
                            alt='Dg Vaishnav College'
                        />
                    </Link>

                    <Link href={"/"} className="flex lg:hidden">
                        {/* Logo */}
                        <Image
                            src={"/Logo/Logo2.png"}
                            width={150}
                            quality={100}
                            height={147}
                            alt='Dg Vaishnav College'
                        />
                    </Link>

                </div>

                {/* Menu */}
                <Menu />

            </div>

        </>
    )
}
