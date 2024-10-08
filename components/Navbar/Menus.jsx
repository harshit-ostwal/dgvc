import Image from 'next/image'
import React from 'react'
import DekstopLogo from '@/public/Logo/Dgvc Banner Logo.png'
import MobileLogo from '@/public/Logo/Logo.png'
import SocialMedia from '../SocialMedia'
import { BellDot, ChevronRight, Menu, Newspaper } from 'lucide-react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu'
import { MenuLinks } from '@/data/Navbar/Menu'
import Link from 'next/link'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible'
import { NextImage } from '../NextImage'

function Menus() {
  return (
    <div className="flex items-center justify-center w-full p-2 px-5">

      {/* Dekstop */}
      <DekstopMenu />

      {/* Mobile*/}
      <MobileMenu />

    </div>
  )
}

export default Menus

const DekstopMenu = () => {
  return (
    <div className="flex-col items-center justify-between hidden w-full xl:flex">
      {/* Logo */}
      <div className="flex items-center justify-between w-full">
        <Link href={"/"}><NextImage Src={DekstopLogo} Width={700} FetchLoading="high" Loading="eager" Alt="Dg Vaishnav College" /></Link>
        <div className="flex flex-col items-end gap-2">
          <Link href="/" className="flex items-center gap-2 p-4 font-semibold rounded-tr-3xl rounded-bl-3xl w-fit bg-gradient-to-t from-amber-200 via-green-200 to-blue-200"><Newspaper size={20} /> Dgvc Times</Link>
          <SocialMedia />
        </div>
      </div>

      {/* Menus */}
      <div className="relative flex justify-center w-full gap-1">
        {MenuLinks.map((data, index) => (
          <NavigationMenu key={index}>
            <NavigationMenuList>
              <NavigationMenuItem>
                {data.subMenu ? (
                  <>
                    <NavigationMenuTrigger className="text-sm">
                      {data.icon}
                      {data.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[400px] p-3 flex flex-col">
                        {data.subMenu.map((data, index) => (
                          <Link
                            key={index}
                            href={data.subHref}
                            className="flex gap-3 p-3 text-sm rounded-lg hover:bg-neutral-100/90"
                          >
                            {data.subIcon}
                            <NavigationMenuLink className="text-sm text-sky-600">{data.subTitle}</NavigationMenuLink>
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link key={index} href={data.href} className="flex items-center justify-center gap-2 p-3 text-sm font-semibold rounded-lg hover:bg-neutral-100/90">
                    {data.icon}
                    {data.title}
                  </Link>
                )}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ))}
      </div>
    </div>
  )
}

const MobileMenu = () => {

  return (
    <div className="flex items-center justify-between w-full xl:hidden">
      <div className="flex items-center gap-4 shrink-0">
        <Sheet>
          <SheetTrigger asChild>
            <Menu size={20} />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
            <SheetClose asChild>
              <Link href={"/"}><NextImage Src={MobileLogo} Width={120} FetchLoading="high" Loading="eager" Alt="Dg Vaishnav College" /></Link>
            </SheetClose>
            <div className="flex flex-col w-full h-full gap-2 py-10">
              {MenuLinks.map((data, index) => (
                data.subMenu ? (
                  <Collapsible key={index} className="w-full space-y-2">
                    <CollapsibleTrigger className="flex w-full rounded-md items-center justify-between font-medium [&[data-state=open]>svg]:rotate-90 hover:bg-neutral-100/90">
                      <h1 className="flex items-center gap-2 p-3 text-sm font-semibold">
                        {data.icon}
                        {data.title}
                      </h1>
                      <ChevronRight className="transition-transform" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="flex flex-col gap-2 pl-5">
                      {data.subMenu.map((subItem, subIndex) => (
                        <SheetClose asChild key={subIndex}>
                          <Link key={subIndex} href={subItem.subHref} className="flex items-center gap-3 p-3 text-sm rounded-md text-sky-500 hover:bg-neutral-100/90">
                            <span className="text-black">{subItem.subIcon}</span>
                            {subItem.subTitle}
                          </Link>
                        </SheetClose>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <SheetClose asChild key={index}>
                    <Link key={index} href={data.href} className="flex items-center w-full gap-2 p-3 text-sm font-semibold rounded-lg hover:bg-neutral-100/90">
                      {data.icon}
                      {data.title}
                    </Link>
                  </SheetClose>
                )
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <Link href={"/"}><NextImage Src={MobileLogo} Width={120} FetchLoading="high" Loading="eager" Alt="Dg Vaishnav College" /></Link>
      </div>

      <div className="flex gap-1">
        <button className="p-2 rounded-full hover:bg-neutral-100"><BellDot size={20} /></button>
        <button className="p-2 rounded-full hover:bg-neutral-100"><Newspaper size={20} /></button>
      </div>
    </div >
  )
}