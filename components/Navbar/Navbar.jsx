import Image from 'next/image'
import React from 'react'
import News from './News'
import Menu from './Menu'

export default function Navbar() {

    return (
        <>

            {/* Navbar Details */}
            <div id='navbar' className="w-full h-full flex flex-col gap-2 overflow-hidden">

                {/* Importing News */}
                <News />

                <div className="flex justify-between pr-5 pl-5 md:pl-10 md:pr-10 items-center">

                    {/* Logo */}
                    <Image
                        src={"/Logo/Logo2.png"}
                        width={150}
                        quality={100}
                        height={147}
                        alt='Dg Vaishnav College'
                    />

                    {/* Logo */}
                    <Image
                        src={"/Logo/Logo.png"}
                        width={900}
                        quality={100}
                        height={135}
                        alt='Dg Vaishnav College'
                    />

                </div>

                {/* Menu */}
                <Menu />

            </div>

        </>
    )
}
