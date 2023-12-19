import React from 'react'

export default function SideBar({ Menu }) {
    return (
        <>

            {/* Sidebar Navigation */}
            <div
                className={
                    Menu ? "fixed lg:hidden h-full left-0 top-0 z-[-99] w-[100%] duration-1000 bg-gradient-to-tl to-cyan-200 from-red-200" : "fixed lg:hidden h-full left-[-100%] top-0 z-[-99] w-[100%] duration-1000 bg-gradient-to-tl to-cyan-200 from-red-200"
                }
            >


            </div>

        </>
    )
}
