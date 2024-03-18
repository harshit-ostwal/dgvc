import { InfoData } from '@/data/(main)/info'
import Link from 'next/link'
import React from 'react'

function Info() {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-20 px-3 py-20 md:px-10 lg:px-20">
            <div className="flex flex-col items-center justify-center gap-10 xl:flex-row">
                <div className="w-full h-fit">
                    <iframe className="aspect-video rounded-xl" width="100%" height="100%" allow="autoplay;" src="https://www.youtube-nocookie.com/embed/JgvQmR6HKlY?vq=hd1080&autoplay=1&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&mute=1&controls=0&disablekb=1" frameborder="0"></iframe>
                </div>
                <div className="w-full justify-center items-center xl:items-start xl:w-[50%] h-full flex flex-col gap-5">
                    <h1 className="text-3xl font-bold text-center xl:text-start md:text-4xl">Welcome To DDGD Vaishnav College</h1>
                    <p className="text-sm font-semibold md:text-base text-wrap">Dwaraka Doss Goverdhan Doss Vaishnav College, a linguistic minority institution established in the year 1964 by the Rajasthanis and Gujaratis settled in Chennai for the cause of higher education. The college with a sole purpose of imparting knowledge and value based education saw its grand day on 30th June 1964 with one course in B.Sc. Mathematics with Shri. Totadri Iyengar ( teacher of Dr. APJ Abdul Kalam) as its first Principal.</p>
                    <p className="text-sm font-semibold md:text-base text-wrap">Dwaraka Doss Goverdhan Doss Vaishnav College has been a haven for generations of enthusiastic learners through five decades and more. College was founded on the principles of Vaishnavism, with the sole purpose of imparting value based quality education and empowering the youth. The college has seen a phenomenal growth in terms of its infrastructure, its constantly restructured and revamped curriculum to cater to the specific needs of the students community. Outstanding performance of the students in academics and extension activities has enabled the college to emerge one of the premier institutions of higher learning... </p>
                    <Link href={""} className="p-4 font-semibold text-white rounded-tr-2xl w-fit h-fit hover:underline bg-slate-950">Read More</Link>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {InfoData.map((data, index) => (
                    <div key={index} className="flex flex-col items-center justify-center gap-5 p-10 background rounded-3xl">
                        <span>{data.infoIcon}</span>
                        <div className="flex flex-col text-center">
                            <h1 className="text-2xl font-bold">{data.infoTitle}</h1>
                            <p className="text-xl font-semibold">{data.infoSubTitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Info