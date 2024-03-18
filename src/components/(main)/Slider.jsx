"use client"
import React, { useRef } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { SliderData } from '@/data/(main)/Slider'
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"

function Slider() {

    const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    )

    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {SliderData.map((data, index) => (
                    <CarouselItem key={index}>
                        <Image src={data.imageUrl} width={1920} className="w-full h-[40vw] lg:h-[35vw]" priority={true} height={640} quality={100} />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

export default Slider