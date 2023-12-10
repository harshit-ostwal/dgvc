"use client"
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import MenuData from '../data/Navbar/Menu'
import Link from 'next/link'

export default function Menu() {
  return (
    <>
      <div className="hidden justify-center items text-primaryDark h-14 gap-2 xl:flex">
        {MenuData.map((data) => (
          <NavigationMenu key={data.id}>
            <NavigationMenuList>
              <NavigationMenuItem>
                {data.subMenu ? (
                  <>
                    <NavigationMenuTrigger className="font-semibold text-base">
                      {data.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[300px] p-3 flex flex-col">
                        {data.subMenu.map((subData, id) => (
                          <Link
                            key={id}
                            href={subData.subHref}
                            className="flex p-3 space-x-3 hover:bg-gray-800 rounded-lg"
                          >
                            {subData.subIcon}
                            <NavigationMenuLink>{subData.subTitle}</NavigationMenuLink>
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link key={data.id} href={data.href} className="flex justify-center font-semibold text-base p-3 rounded-lg">
                    {data.title}
                  </Link>
                )}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ))}
      </div>
    </>
  )
}
