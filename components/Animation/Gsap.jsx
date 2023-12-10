import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import FooterGsap from "./FooterGsap";
import NavigaitonGsap from "./NavigationGsap";
import IntroGsap from "./IntroGsap";

export function GsapAnimation() {

    gsap.registerPlugin(ScrollTrigger);

    // GSAP Animation For Intro Text
    useGSAP(() => {

        //Hidding The Navbar Div
        // tl.from("#navbar", {
        //     display: "none",
        // });

        {

            // Intro Animation
            IntroGsap()

        }

        {

            // Navigaiton Animation
            NavigaitonGsap()

        }

        {

            // Footer Animation
            FooterGsap()

        }

    }, []);

}