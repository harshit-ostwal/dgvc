import React from 'react'
import News from './News'

export default function Navbar() {
    return (
        <>

            {/* Navbar Details */}
            <div className="absolute top-0 bg-black w-full h-60">

                {/* Importing News */}
                <News />

            </div>

        </>
    )
}
