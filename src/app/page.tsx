//src/app/page.tsx
'use client'
import { useRouter } from 'next/navigation'
import {
  SiReact, SiNodedotjs, SiMysql,
  SiPython, SiCplusplus, SiMongodb, SiGit, SiHuggingface, SiEclipseide
} from 'react-icons/si'

import { LiaJava } from "react-icons/lia";


export default function LandingPage() {
  const router = useRouter()

  return (
    <div className="relative w-full min-h-screen overflow-y-auto overflow-x-hidden isolate bg-gradient-to-br from-white to-neutral-50">
      <div
        className="relative w-full overflow-hidden isolate bg-gradient-to-br from-white to-neutral-50"
        style={{
          fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI",
                           Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`
        }}
      />
      {/* Blobs in background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Left Blob – Apple Yellow Gold (used in iOS/iPadOS accents) */}
        <div
          className="blob absolute bg-gradient-to-br from-[#FFF2D8] to-[#FFC86B] animate-morph-float-left"
          style={{
            top: '15%',
            left: '5%',
            width: '30vw',
            height: '30vw',
            minWidth: '200px',
            minHeight: '200px'
          }}
        />

        {/* Right Blob – Apple Blue Accent (based on macOS Monterey/iOS wallpaper tints) */}
        <div
          className="blob absolute bg-gradient-to-br from-[#A2D2FF] to-[#5FA8FF] animate-morph-float-right"
          style={{
            bottom: '15%',
            right: '5%',
            width: '30vw',
            height: '30vw',
            minWidth: '200px',
            minHeight: '200px'
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100dvh-0rem)] py-24 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-apple font-light text-neutral-900 tracking-tight">
          Karthikeyan Reddy T
        </h1>
        <p className="mt-4 max-w-xl font-apple font-extralight text-neutral-600 text-lg leading-relaxed">
          Driven by a relentless pursuit of clarity, I approach complexity as a pattern waiting to be understood.
        </p>

        {/* Button with matching hover and keyboard focus-visible effects */}
        <button
          aria-label="View portfolio"
          onClick={() => router.push('/main')}
          className={
            "mt-8 inline-flex items-center justify-center px-6 py-2 rounded-full " +
            "bg-white/75 border border-neutral-200 text-sm font-light font-apple text-neutral-900 " +
            "backdrop-blur-sm shadow-sm " +
            "transition-transform transition-colors duration-200 ease-out " +
            "bg-clip-padding bg-origin-border " +
            "hover:bg-gradient-to-r hover:from-[#A2D2FF] hover:to-[#5FA8FF] " +
            "hover:text-white hover:border-transparent hover:shadow-md hover:-translate-y-0.5 hover:scale-105 " +
            "active:translate-y-0.5 active:scale-[0.997] " +
            "focus:outline-none focus-visible:bg-gradient-to-r focus-visible:from-[#A2D2FF] focus-visible:to-[#5FA8FF] " +
            "focus-visible:text-white focus-visible:border-transparent " +
            "focus-visible:shadow-md focus-visible:-translate-y-0.5 focus-visible:scale-105"
          }
        >
          View Portfolio
        </button>

        {/* Heading for Skills */}
        <h2 className="mt-12 text-base md:text-xl font-apple text-neutral-900 tracking-tight">
          Skills and Tools
        </h2>

        <div className="mt-11 flex flex-wrap justify-center gap-[7.5rem] text-4xl text-neutral-500">
          {[
            { Icon: SiReact, name: 'React' },
            { Icon: SiNodedotjs, name: 'Node.js' },
            { Icon: SiMysql, name: 'MySQL' },
            { Icon: SiPython, name: 'Python' },
            { Icon: SiCplusplus, name: 'C++' },
            { Icon: LiaJava, name: 'Java' },
            { Icon: SiMongodb, name: 'MongoDB' },
            { Icon: SiGit, name: 'Git' },
            { Icon: SiHuggingface, name: 'HuggingFace' },
          ].map(({ Icon, name }, idx) => (
            <div key={idx} className="relative group flex flex-col items-center">
              <Icon className="h-7 w-7 text-neutral-500 transition-transform transition-colors duration-300 ease-in-out group-hover:scale-110 group-hover:text-black" />
              <span className="absolute mt-11 text-xs font-apple font-light text-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}