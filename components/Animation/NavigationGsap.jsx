"use client"
import gsap from "gsap";

export default function NavigaitonGsap() {

    // Timeline For Run One At A Time
    const tl = gsap.timeline();

    tl.to("#navbar,#news", {
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#navbar",
            endTrigger: "#news",
            start: "top 0%",
            end: "bottom 0%",
            scroller: "body",
            scrub: 3,
        }
    });

    tl.to("#navbar #logo", {
        x: -100,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#navbar",
            endTrigger: "#news",
            start: "top 0%",
            end: "bottom 0%",
            scroller: "body",
            scrub: 3,
        }
    })

    tl.to("#navbar #menuIcon", {
        x: 100,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#navbar",
            endTrigger: "#news",
            start: "top 0%",
            end: "bottom 0%",
            scroller: "body",
            scrub: 3,
        }
    })

}