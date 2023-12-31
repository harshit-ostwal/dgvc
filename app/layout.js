import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import Footer from '@/components/Footer/Footer'
import { Varela_Round } from 'next/font/google'

export const metadata = {
  title: 'Dg Vaishnav College',
  description: 'Generated by create next app',
}

const varela = Varela_Round({ subsets: ["latin"], variable: "--varela", weight: "400" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`w-full h-full flex flex-col justify-between bg-background ${varela.variable}`}>

        {/* Importing Navbar */}
        <Navbar />

        {children}

        {/* Importing Footer */}
        <Footer />

      </body>
    </html>
  )
}