import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className="h-screen bg-[#281816] bg-[url('/loading_screen/loading_screen_bg.png')] bg-cover bg-center flex items-center justify-center">

      <div className="flex flex-col gap-5 items-center justify-center w-full max-w-screen-md px-4">
        {/* Logo Image */}
        <Image
          src="/loading_screen/loading_screen_logo.png"
          alt="Loading Screen Logo"
          width={200}
          height={200}
          className="w-[50%] md:w-[200px] h-auto"
        />

        {/* Animation Image */}
        <Image
          src="/loading_screen/loading_screen_animation.png"
          alt="Loading Screen Animation"
          width={200}
          height={200}
          className="w-[50%] md:w-[200px] h-auto"
        />

        {/* SVG Animation */}
        <svg className="animate-pulse" width={516} height={168} viewBox="0 0 516 268" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x={8} y={132} width={460} height={4} rx={2} fill="#342600" className="animate-shift" />
          <rect x={8} y={132} width={460} height={4} rx={2} fill="url(#paint0_linear_1_6819)" className="animate-shift" />
          <g filter="url(#filter0_f_1_6819)">
            <rect x={8} y={127} width={460} height={14} fill="url(#paint1_linear_1_6819)" fillOpacity="0.8" className="animate-shift" />
          </g>
          <g filter="url(#filter1_f_1_6819)">
            <path d="M210 131H468V139H210V131Z" fill="url(#paint2_linear_1_6819)" fillOpacity="0.5" />
          </g>
          <g style={{ mixBlendMode: 'overlay' }}>
            <rect x={8} y={132} width={460} height={4} rx={2} fill="url(#paint3_linear_1_6819)" fillOpacity="0.7" />
          </g>
          <g filter="url(#filter2_f_1_6819)">
            <rect x={274} y={48} width={194} height={172} rx={86} fill="url(#paint4_linear_1_6819)" fillOpacity="0.2" className="animate-shift" />
          </g>
          <g style={{ mixBlendMode: 'overlay' }} filter="url(#filter3_f_1_6819)">
            <rect x={378} y={94} width={90} height={80} rx={40} fill="white" fillOpacity="0.5" className="animate-shift" />
          </g>
          <defs>
            <filter id="filter0_f_1_6819" x={0} y={119} width={476} height={30} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation={4} result="effect1_foregroundBlur_1_6819" />
            </filter>
            <filter id="filter1_f_1_6819" x={205} y={126} width={268} height={18} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_1_6819" />
            </filter>
            <filter id="filter2_f_1_6819" x={226} y={0} width={290} height={268} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation={24} result="effect1_foregroundBlur_1_6819" />
            </filter>
            <filter id="filter3_f_1_6819" x={330} y={46} width={186} height={176} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation={24} result="effect1_foregroundBlur_1_6819" />
            </filter>
            <linearGradient className="animate-pulse" id="paint0_linear_1_6819" x1={468} y1="136.003" x2={8} y2="136.003" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFD460" />
              <stop offset="0.333333" stopColor="#F08F2D" />
              <stop offset="0.666667" stopColor="#F08F2D" />
              <stop offset={1} stopColor="#F08F2D" />
            </linearGradient>
            <linearGradient className="animate-pulse" id="paint1_linear_1_6819" x1={468} y1="140.992" x2={8} y2="140.992" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFBE33" />
              <stop offset={1} stopColor="#342600" stopOpacity={0} />
            </linearGradient>
            <linearGradient className="animate-pulse" id="paint2_linear_1_6819" x1="465.303" y1={135} x2={210} y2={135} gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFBE33" />
              <stop offset={1} stopColor="#343434" stopOpacity={0} />
            </linearGradient>
            <linearGradient className="animate-pulse" id="paint3_linear_1_6819" x1={468} y1="136.003" x2={8} y2="136.003" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="0.604167" stopColor="white" stopOpacity="0.739583" />
              <stop offset={1} stopColor="white" stopOpacity={0} />
            </linearGradient>
            <linearGradient className="animate-pulse" id="paint4_linear_1_6819" x1={468} y1="219.907" x2={274} y2="219.907" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F08F2D" />
              <stop offset={1} stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default loading