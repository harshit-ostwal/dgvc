"use client"
import React from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import IntroData from './data/Intro';

export default function Intro() {

    // GSAP Animation For Intro Text
    useGSAP(() => {

        // Timeline For Run One At A Time
        const tl = gsap.timeline();

        // Mapping Animation According ID Of That Div 
        {
            IntroData.forEach((data) => {

                // Displaying The Div
                tl.to(`#intro #${data.name}`, {
                    display: "flex",
                    delay: -.5,
                    opacity: 1
                });

                // Initializing Animating Text
                tl.from(`#intro #${data.name} h3`, {
                    opacity: 0,
                    x: 40,
                    delay: .2,
                    duration: 1,
                    stagger: 0.1
                });

                // DeInitializing Animating Text
                tl.to(`#intro #${data.name} h3`, {
                    x: -40,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.1
                });

                // Hidding Div
                tl.to(`#intro #${data.name}`, {
                    display: "none"
                });
            })
        }

        // Hidding The Main Div
        tl.to("#intro", {
            opacity: 0,
            display: "none",
        });

    }, []);


    return (

        // Intro Animation Details
        <div id="intro" className="h-[100%] w-full p-5 text-sm sm:text-base md:text-xl lg:text-2xl font-semibold bg-black fixed top-0 z-50 flex justify-center items-center">

            {/* Mapping Div Details & Intro Details */}
            {IntroData.map((introData, indexData) => (

                // Mapping Intro Div Details
                <div key={indexData} id={introData.name} className={`hidden gap-2 md:gap-3 opacity-0 ${introData.color}`}>

                    {/* Mapping Intro Text Details */}
                    {introData.title.map((introText, indexTitle) => (

                        // Text Details
                        <h3 key={indexTitle} className="flex gap-3 items-center">{introText?.startIcon}{introText.text}{introText?.endIcon}</h3>
                    ))}

                </div>
            ))
            }
        </div >
    );
}
