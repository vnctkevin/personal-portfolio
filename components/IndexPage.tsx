/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qIfaZ6Ne5Gb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import HeroSection from "./Hero"
import Navbar from "./Navbar"
import Image from "next/image"
import Experiences from "./Experiences"
import Projects from "./Projects"
import Footer from "./Footer"


export default function IndexPage() {
  return (
    <>
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main>
        <HeroSection />
        <Experiences />
        <Projects/>
      </main>
      <Footer/>
    </div>
    </>
  )
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
