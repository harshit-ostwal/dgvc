"use client"
import gsap from "gsap";
import IntroData from "../data/Intro";

export default function IntroGsap() {

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
    
}