import React from 'react';
import IntroData from '../data/Intro';

export default function Intro() {

    return (

        // Intro Animation Details
        <div id="intro" className="h-[100%] w-full p-2 sm:p-5 text-xs sm:text-base md:text-xl lg:text-2xl font-semibold bg-black fixed top-0 z-50 flex justify-center items-center">

            {/* Mapping Div Details & Intro Details */}
            {IntroData.map((introData, indexData) => (

                // Mapping Intro Div Details
                <div key={indexData} id={introData.name} className={`hidden gap-1 sm:gap-2 md:gap-3 opacity-0 ${introData.color}`}>

                    {/* Mapping Intro Text Details */}
                    {introData.title.map((introText, indexTitle) => (

                        // Text Details
                        <h3 key={indexTitle} className="flex gap-1 sm:gap-2 md:gap-3 items-center">{introText?.startIcon}{introText.text}{introText?.endIcon}</h3>
                    ))}

                </div>
            ))
            }
        </div >
    );
}
