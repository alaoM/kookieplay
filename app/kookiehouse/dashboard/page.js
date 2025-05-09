"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaLink } from "react-icons/fa6";
const page = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
      const getNextFridayMidnight = () => {
        const now = new Date();
        const day = now.getDay();
        const diff = (5 - day + 7) % 7 || 7; // Days until Friday
        const friday = new Date(now);
        friday.setDate(now.getDate() + diff);
        friday.setHours(23, 59, 59, 999);
        return friday;
      };
  
      const updateCountdown = () => {
        const now = new Date();
        const target = getNextFridayMidnight();
        const diff = target.getTime() - now.getTime();
  
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
  
        setTimeLeft({ days, hours, minutes, seconds });
      };
  
      updateCountdown();
      const interval = setInterval(updateCountdown, 1000);
      return () => clearInterval(interval);
    }, []);
    return (


        <div className="h-full bg-[#281816] bg-[url('/loading_screen/loading_screen_bg.png')] bg-cover bg-center flex flex-col items-center justify-center font-[family-name:var(--font-lilita)] space-y-8">
            <p className='text-6xl text-white text-shadow-5xs text-shadow-[#3d221f]'>Got Kookie?</p>
            <div className=" w-[40%] bg-[#3d221f] border-[3px] border-[#4f2628]   rounded-2xl shadow-inner">
                <p className=" h-10 bg-[url('/navbar/exp_gained_bar.svg')] bg-no-repeat bg-contain bg-left flex items-center justify-center">
                    <span className="text-[#fff] text-[24px] pr-2 text-shadow-2xs text-shadow-[#3d221f] ">
                        Presale coming soon
                    </span>
                </p>
            </div>
            <div className="flex gap-5 items-center justify-center  px-4">
                <div className="flex gap-5 items-center justify-center    px-4"
                >
                    <div className="rounded-2xl bg-[#2270E8] dot-pattern shadow-inner border-4 border-transparent border-opacity-0 px-8 py-6">
                        <div className="flex flex-col">
                            <p className="text-6xl gradient-text font-bold">{timeLeft.days}</p>
                            <p className="text-[#A5CCFF] text-xl font-semibold mt-2">Days</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 items-center justify-center  px-4"
                >
                    <div className="rounded-2xl bg-[#2270E8] dot-pattern shadow-inner border-4 border-transparent border-opacity-0 px-8 py-6">
                        <div className="flex flex-col ">
                            <p className="text-6xl gradient-text font-bold">{timeLeft.hours}</p>
                            <p className="text-[#A5CCFF] text-xl font-semibold mt-2">Hours</p>
                        </div>
                    </div>
                </div>
                <Image
                    src="/loading_screen/loading_screen_animation.png"
                    alt="Loading Screen Logo"
                    width={200}
                    height={350}
                    className="w-[50%] md:w-[200px] h-auto"
                />

                <div className="flex gap-5 items-center justify-center  px-4"
                >
                    <div className="rounded-2xl bg-[#2270E8] dot-pattern shadow-inner border-4 border-transparent border-opacity-0 px-8 py-6">
                        <div className="flex flex-col ">
                            <p className="text-6xl gradient-text font-bold">{timeLeft.minutes}</p>
                            <p className="text-[#A5CCFF] text-xl font-semibold mt-2">Minutes</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 items-center justify-center rounded-2xl bg-red-500  border-2 border-[#2270E8] border-dotted  p-0.5"
                >

                    <div className="rounded-2xl bg-[#5452A4] dot-pattern shadow-inner border-4 border-opacity-0  px-8 py-6">{/* border-transparent border-opacity-0 */}
                        <div className="flex flex-col">
                            <p className="text-6xl gradient-text font-bold">{timeLeft.seconds}</p>
                            <p className="text-[#A5CCFF] text-xl font-semibold mt-2">Seconds</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-[30%] bg-[#3d221f] border-[3px] border-[#4f2628]   rounded-xl p-0.5 shadow-inner">
                <div className='flex items-center justify-between gap-1'>
                    <div className='flex items-center gap-1 pl-2 b  border-[#8E5C55] rounded-md px-2  '>
                        <div>
                            <FaLink size={24} color='#8E5C55' />
                        </div>
                        <input
                            type="text"
                            defaultValue="NB922JH002"
                            className="bg-transparent outline-none text-white text-[24px] placeholder-white text-shadow-xs text-shadow-[#3d221f] w-full"
                        />
                    </div>
                    <button className="hover:scale-105 transition-transform h-full">
                        <Image
                            src="/navbar/plus_button.svg"
                            alt="plus_button"
                            width={30}
                            height={30}
                        />
                    </button>
                </div>



            </div>

            <p className='text-[#CF8F78] text-[16px] font-[family-name:var(--font-roboto)]'> Enter Your Wallet Address To Check For Eligibility</p>

        </div >

    )
}




export default page