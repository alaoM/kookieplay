"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { FaEthereum, FaChevronDown, FaChevronUp } from "react-icons/fa6"
import { TfiReload } from "react-icons/tfi"

const Page = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 11, minutes: 55, seconds: 13 })
    const [ethAmount, setEthAmount] = useState(0.1)
    const [kookieAmount, setKookieAmount] = useState(0.1)
    const [showEthDropdown, setShowEthDropdown] = useState(false)
    const [showKookieDropdown, setShowKookieDropdown] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                const newSeconds = prev.seconds - 1

                if (newSeconds < 0) {
                    const newMinutes = prev.minutes - 1

                    if (newMinutes < 0) {
                        const newHours = prev.hours - 1

                        if (newHours < 0) {
                            const newDays = prev.days - 1

                            if (newDays < 0) {
                                clearInterval(timer)
                                return { days: 0, hours: 0, minutes: 0, seconds: 0 }
                            }

                            return { days: newDays, hours: 23, minutes: 59, seconds: 59 }
                        }

                        return { ...prev, hours: newHours, minutes: 59, seconds: 59 }
                    }

                    return { ...prev, minutes: newMinutes, seconds: 59 }
                }

                return { ...prev, seconds: newSeconds }
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className=" bg-[#281816] flex flex-col items-center justify-center py-8 px-4 font-[family-name:var(--font-lilita)]">
            <div className="w-full max-w-md p-6 space-y-4">
                <p className="text-3xl text-white font-bold">$KOOKIE</p>
                <p className="text-2xl text-white">Presale Round 1</p>
                <p className="text-sm text-[#CF8F78] font-[family-name:var(--font-roboto)]">
                    Presale Ends in{" "}
                    <span className="text-white">
                        {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
                    </span>
                </p>

                <div className="bg-[#3d221f] border-[3px] border-[#4f2628] rounded-2xl shadow-inner overflow-hidden">
                    <div className="h-8 bg-[url('/navbar/exp_gained_bar.svg')] bg-no-repeat bg-contain  flex items-center justify-center">
                        <span className=" inset-0 flex items-center justify-center text-white text-sm text-shadow-[0_1px_2px_rgba(0,0,0,0.5)] whitespace-nowrap px-2">
                            380,000,000.900 $KOOKIE Left
                        </span>
                    </div>
                </div>

                <div className="space-y-3">
                    {/* ETH Payment Section */}
                    <div className="rounded-2xl border-4 border-[#FFBA6B] bg-[#3d221f] p-4  flex flex-col w-full">

                        <div className="flex justify-between items-center mb-2">
                            {/* Left Side: Label + Input */}
                            <div className="flex flex-col w-1/3">
                                <p className="text-[#CF8F78] text-[12px] font-bold font-[family-name:var(--font-roboto)]">
                                    You're Paying
                                </p>
                                <input
                                    type="text"
                                    defaultValue="0.100"
                                    className="text-white text-3xl font-bold border-b border-[#CF8F78]/25 bg-transparent outline-none placeholder:text-white text-shadow-2xs text-shadow-[#3d221f]  pr-4 pb-4"
                                />
                            </div>

                            {/* Middle: Currency Dropdown */}
                            <div className="flex items-start gap-2">
                                {/* Text Column */}
                                <div className="flex flex-col items-end text-right gap-1">
                                    <div
                                        className="flex items-center gap-1 px-3 py-1 rounded-lg cursor-pointer"
                                        onClick={() => setShowEthDropdown(!showEthDropdown)}
                                    >
                                        {showEthDropdown ? (
                                            <FaChevronUp size={12} color="#fff" />
                                        ) : (
                                            <FaChevronDown size={12} color="#fff" />
                                        )}
                                        <span className="text-[16px] text-white font-[family-name:var(--font-roboto)]">
                                            ETH
                                        </span>
                                    </div>
                                    <div className="shadow-inner">
                                        <span className="text-[#CF8F78] text-[12px] font-bold font-[family-name:var(--font-roboto)]">
                                            1 ETH = <span className="text-white">$3325.35 USD</span>
                                        </span>
                                    </div>
                                </div>

                                {/* Icon Button */}
                                <div className="flex items-start">
                                    <button className="border-3 border-[#CF8F783D]/25 rounded-xl p-4">
                                        <FaEthereum size={24} color="#fff" />
                                    </button>
                                </div>
                            </div>



                        </div>

                        {/* Bottom Row: Limits */}
                        <div className="flex justify-between items-center mt-3 text-sm">
                            <p className="text-[#CF8F78]">
                                Min: <span className="text-white">0.25 ETH</span>
                            </p>
                            <p className="text-[#CF8F78]">
                                <span className="text-white">0.100 ETH</span> in Wallet
                            </p>
                        </div>
                    </div>


                    {/* Arrow Connector */}
                    <div className="flex justify-center -my-2 relative z-10">
                        <div className="bg-[#FFBA6B] p-2 rounded-full">
                            <FaChevronDown size={20} color="#281816" />
                        </div>
                    </div>

                    {/* Kookie Section */}
                    <div className="rounded-2xl border-4 border-[#4f2628] bg-[#3d221f] p-4">
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-[#CF8F78] text-sm">You're Getting</p>
                            <div
                                className="flex items-center gap-1 bg-[#281816] px-3 py-1 rounded-lg cursor-pointer"
                                onClick={() => setShowKookieDropdown(!showKookieDropdown)}
                            >
                                <div className="w-4 h-4 bg-[#FFBA6B] rounded-full"></div>
                                <span className="text-white text-sm">Kookie</span>
                                {showKookieDropdown ? <FaChevronUp size={12} color="#fff" /> : <FaChevronDown size={12} color="#fff" />}
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <p className="text-white text-3xl font-bold">0.100</p>
                            <p className="text-[#CF8F78] text-xs">1 $Kookie = $0.001 USD</p>
                        </div>

                        <button className="w-full bg-[#FFBA6B] text-white font-bold py-3 rounded-lg mt-4 hover:bg-[#e5a861] transition-colors">
                            Buy Now
                        </button>
                    </div>
                </div>

                <div className="flex justify-center mt-4">
                    <div className="p-3 rounded-xl bg-[#FFBA6B] flex items-center shadow-md hover:bg-[#e5a861] cursor-pointer transition-colors">
                        <TfiReload size={24} color="#fff" />
                    </div>
                </div>

                <p className="text-[#CF8F78] text-base font-[family-name:var(--font-roboto)] text-center">Purchased 0</p>
            </div>
        </div>
    )
}

export default Page




{/* <div className="flex items-center gap-2 h-12 ">
<div className="md:flex flex-col gap-1 items-center justify-center hidden">
    <div className="flex items-center gap-1">
        <Image
            src="/navbar/kookie_tier_icon.svg"
            alt="kookie_tier_icon"
            width={20}
            height={20}
        />
        <p className="text-[#FF9E5E] text-sm uppercase font-[family-name:var(--font-lilita)]">NICKNAME1234</p>
    </div>
    <div className="w-full bg-[#4f2628] border-[3px] border-[#3d221f] dot-pattern rounded-lg shadow-inner">
        <p className="w-full h-5 bg-[url('/navbar/exp_gained_bar.svg')] bg-no-repeat bg-contain bg-left flex items-center justify-end">
            <span className="text-[#FF9E5E] text-[10px] pr-2 text-shadow-2xs text-shadow-[#3d221f] font-[family-name:var(--font-lilita)]">
                EXP 2,245/4,500
            </span>
        </p>
    </div>
</div>

<div className="flex items-center gap-2 h-full">
    <button className="h-full border-2 border-[#000] rounded-2xl overflow-hidden hover:scale-105 transition-transform">
    <FaEthereum size={16} color="#fff" />
    </button>
   
</div>
</div> */}