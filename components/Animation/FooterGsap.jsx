"use client"
import gsap from "gsap";

export default function FooterGsap() {
    {

        // Timeline For Run One At A Time
        const tl = gsap.timeline();

        // Footer Animations

        //Footer Top Effects
        tl.from("#footer #top", {
            opacity: 0,
            x: 300,
            duration: 1,
            scrollTrigger: {
                trigger: "#footer #top",
                start: "top 50%",
                end: "bottom 50%",
                scroller: "body",
                scrub: 3,
            }
        });

        //Footer Bottom Left Effects
        tl.from("#bottom-left-1", {
            opacity: 0,
            x: -300,
            duration: 1,
            scrollTrigger: {
                trigger: "#bottom-left-1",
                start: "top 80%",
                end: "bottom 100%",
                scroller: "body",
                scrub: 3,
            }
        });

        //Footer Bottom Right Effects
        tl.from("#bottom-right-1", {
            opacity: 0,
            x: 300,
            duration: 1,
            scrollTrigger: {
                trigger: "#bottom-right-1",
                start: "top 80%",
                end: "bottom 100%",
                scroller: "body",
                scrub: 3,
            }
        });

        //Footer Bottom Mid Effects
        tl.from("#bottom-mid-1,#bottom-mid-2", {
            opacity: 0,
            y: 300,
            duration: 1,
            scrollTrigger: {
                trigger: "#bottom",
                start: "top 80%",
                end: "bottom 100%",
                scroller: "body",
                scrub: 3,
            }
        });
    }
}