"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { FaEthereum, FaChevronDown, FaChevronUp, FaWallet } from "react-icons/fa6"
import { TfiReload, TfiWallet } from "react-icons/tfi"

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
        <div className=" bg-[#281816] flex flex-col items-center justify-center py-4  font-[family-name:var(--font-lilita)] dot-pattern-white">
            <div className="w-full max-w-md p-3 md:p-4 lg:p-6  space-y-4">
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

                <div className="space-y-2">
                    {/* ETH Payment Section */}
                    <div className="rounded-2xl border-4  relative border-[#FFBA6B] bg-[#3d221f] p-4 dot-pattern-white flex flex-col w-full">

                        <div className="flex  justify-between items-center mb-2">
                            {/* Left Side: Label + Input */}
                            <div className="flex flex-col w-1/3">
                                <p className="text-[#CF8F78] text-[12px] font-bold font-[family-name:var(--font-inter)] mb-7">
                                    You&apos;re Paying
                                </p>
                                <input
                                    type="text"
                                    defaultValue="0.100"
                                    className="text-white text-3xl font-bold border-b border-[#CF8F78]/25 bg-transparent outline-none placeholder:text-white placeholder:text-shadow-2xs  text-shadow-2xs text-shadow-[#3d221f]  pr-4 pb-4"
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
                        <div className="mb-5 flex justify-between items-center mt-3 text-[14px]">
                            <p className="text-[#CF8F78] font-[family-name:var(--font-roboto)] font-bold">
                                Min: <span className="text-white">0.25 ETH</span>
                            </p>
                            <p className="text-[#CF8F78] font-[family-name:var(--font-roboto)] font-bold flex items-center gap-1">
                                <span className="text-white">0.100 ETH</span> <FaWallet /> in Wallet
                            </p>
                        </div>

                        <div className="absolute -bottom-[4px] left-1/2 -translate-x-1/2 w-14 h-14 overflow-hidden z-20">
                            {/* Circle with full border but only top half will show */}
                            <div className="w-14 h-14 border-4 border-[#FFBA6B] rounded-2xl bg-[#281816] translate-y-[50%]"></div>
                        </div>


                    </div>


                    {/* Arrow Connector */}
                      <div className="flex justify-center  relative -my-5 z-50 hover:scale-105">
                        <Image src="/entersite/arrow_trade.svg" alt="arrow" width={50} height={50} className="w-10 h-10" />
                    </div>  

                    {/* Kookie Section */}
                    <div className="rounded-2xl border-4 mt-1 relative border-[#FFBA6B] bg-[#3d221f] p-4 dot-pattern-white flex flex-col w-full">

                        <div className="flex  justify-between items-center mb-2">
                            {/* Left Side: Label + Input */}
                            <div className="flex flex-col w-1/3">
                                <p className="text-[#CF8F78] text-[12px] font-bold font-[family-name:var(--font-inter)] mb-7">
                                    You7&apos;re Buying
                                </p>
                                <input
                                    type="text"
                                    defaultValue="0.100"
                                    className="text-white text-3xl font-bold border-b border-[#CF8F78]/25 bg-transparent outline-none placeholder:text-white placeholder:text-shadow-2xs  text-shadow-2xs text-shadow-[#3d221f]  pr-4 pb-4"
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
                                            Kookie
                                        </span>
                                    </div>
                                    <div className="shadow-inner">
                                        <span className="text-[#CF8F78] text-[12px] font-bold font-[family-name:var(--font-roboto)]">
                                            1 ETH = <span className="text-white">$3325.35 USD</span>
                                        </span>
                                    </div>
                                </div>

                                {/* Icon Button */}
                                <div className="flex items-start z-50">
                                    <button className="border-3 border-[#CF8F783D]/25 rounded-xl p-2">
                                        <Image
                                            src="/navbar/kookie_tier_icon.svg"
                                            alt="kookie_tier_icon"
                                            width={30}
                                            height={30}
                                        />
                                    </button>
                                </div>
                            </div>



                        </div>
                        <div className="mt-3 mb-5 bg-[#3d221f] border-[3px] border-[#4f2628] rounded-2xl shadow-inner overflow-hidden">
                            <div className="w-full h-10 bg-[url('/navbar/exp_bar_gained_full.svg')] bg-no-repeat bg-cover bg-center flex items-center justify-center">
                                <span className="text-white text-[16px] [text-shadow:0_1px_2px_rgba(0,0,0,0.5)] whitespace-nowrap px-2 [text-stroke:1px_black] font-[family-name:var(--font-inter)]">
                                    Buy Now
                                </span>
                            </div>
                        </div>


                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-14 h-7 overflow-hidden z-20">
                            <div className="w-14 h-14 border-4 border-[#FFBA6B] rounded-2xl bg-[#281816] -translate-y-[50%] "></div>
                        </div>


                    </div>


                </div>

                <div className=" flex flex-col items-center justify-center gap-3">


                    <div className="mt-10 p-3 rounded-xl bg-[#FFBA6B] flex items-center w-fit shadow-md">
                        <div className="flex items-center gap-1 font-extrabold">
                        
                                <TfiReload size={24} color="#fff" />
                          
                        </div>
                    </div>

                    <p className="text-[#CF8F78] text-base font-[family-name:var(--font-inter)] text-center">Purchased <span className="text-white">0</span></p>

                </div>

            </div>
        </div>
    )
}

export default Page




