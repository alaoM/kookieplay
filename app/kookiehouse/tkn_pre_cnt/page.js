'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaLink } from 'react-icons/fa6';
import Link from 'next/link';

const Page = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const getNextFridayMidnight = () => {
            const now = new Date();
            const day = now.getDay();
            const diff = (5 - day + 7) % 7 || 7;
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
        <div className="min-h-screen bg-[#281816] bg-[url('/loading_screen/loading_screen_bg.png')] bg-cover bg-center flex flex-col items-center justify-center font-[family-name:var(--font-lilita)] space-y-8 px-4">
            <p className="text-4xl md:text-6xl text-white text-shadow-5xs text-shadow-[#3d221f]">Got Kookie?</p>

            <div className="w-full max-w-md bg-[#3d221f] border-[3px] border-[#4f2628] rounded-2xl shadow-inner">
                <p className="h-10 bg-[url('/navbar/exp_gained_bar.svg')] bg-no-repeat bg-contain bg-left flex items-center justify-center">
                    <span className="text-white text-xl md:text-2xl pr-2 text-shadow-2xs text-shadow-[#3d221f]">Presale coming soon</span>
                </p>
            </div>

            <Link
                href="/kookiehouse/tkn_pre"
                className="mt-3 mb-5 w-full max-w-sm bg-[#3d221f] border-[3px] border-[#4f2628] rounded-2xl shadow-inner overflow-hidden"
            >
                <div className="h-10 bg-[url('/navbar/exp_bar_gained_full.svg')] bg-no-repeat bg-cover bg-center flex items-center justify-center">
                    <span className="text-white text-sm md:text-base whitespace-nowrap px-2 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)] [text-stroke:1px_black] font-[family-name:var(--font-inter)]">
                        Presale Demo Page
                    </span>
                </div>
            </Link>

            <div className="flex flex-row flex-wrap gap-3 items-center justify-center px-4">
                {/* Days */}
                <div className="border-4 rounded-2xl border-[#297EFF]">
                    <div className="rounded-xl bg-[#204CB2] dot-pattern shadow-inner border-4 border-[#25244B] border-opacity-0 pr-8 pl-2">
                        <div className="flex flex-col p-4">
                            <p className="text-6xl gradient-text font-bold">{timeLeft.days}</p>
                            <p className="text-[#A5CCFF] text-xl font-semibold mt-2">Days</p>
                        </div>
                    </div>
                </div>

                {/* Hours */}
                <div className="border-4 rounded-2xl border-[#298726]">
                    <div className="rounded-xl bg-[#267923] dot-pattern shadow-inner border-4 border-[#25244B] border-opacity-0 pr-8 pl-2">
                        <div className="flex flex-col p-4">
                            <p className="text-6xl gradient-text font-bold">{timeLeft.hours}</p>
                            <p className="text-[#A5CCFF] text-xl font-semibold mt-2">Hours</p>
                        </div>
                    </div>
                </div>

                {/* IMAGE in the center */}
                <div className="w-[50%] md:w-auto">
                    <Image
                        src="/loading_screen/loading_screen_animation.png"
                        alt="Loading Screen Logo"
                        width={200}
                        height={350}
                        className="w-full md:w-[200px] h-auto"
                    />
                </div>

                {/* Minutes */}
                <div className="border-4 rounded-2xl border-[#FF543F]">
                    <div className="rounded-xl bg-[#B9363C] dot-pattern shadow-inner border-4 border-[#5C2929] border-opacity-0 pr-8 pl-2">
                        <div className="flex flex-col p-4">
                            <p className="text-6xl gradient-text font-bold">{timeLeft.minutes}</p>
                            <p className="text-[#A5CCFF] text-xl font-semibold mt-2">Minutes</p>
                        </div>
                    </div>
                </div>

                {/* Seconds */}
                <div className="border-4 rounded-2xl border-[#605DB7]">
                    <div className="rounded-xl bg-[#424080] dot-pattern shadow-inner border-4 border-[#25244B] border-opacity-0 pr-8 pl-2">
                        <div className="flex flex-col p-4">
                            <p className="text-6xl gradient-text font-bold">{timeLeft.seconds}</p>
                            <p className="text-[#A5CCFF] text-xl font-semibold mt-2">Seconds</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wallet Address Input */}
            <div className="w-full max-w-md bg-[#3d221f] border-[3px] border-[#4f2628] rounded-xl p-0.5 shadow-inner">
                <div className="flex items-center justify-between gap-2 px-2">
                    <div className="flex items-center gap-2 border-[#8E5C55] rounded-md">
                        <FaLink size={20} color="#8E5C55" />
                        <input
                            type="text"
                            defaultValue="NB922JH002"
                            className="bg-transparent outline-none text-white text-base sm:text-xl placeholder-white text-shadow-xs text-shadow-[#3d221f] w-full"
                        />
                    </div>
                    <button className="hover:scale-105 transition-transform h-full">
                        <Image src="/navbar/plus_button.svg" alt="plus_button" width={30} height={30} />
                    </button>
                </div>
            </div>

            <p className="text-[#CF8F78] text-sm sm:text-base font-[family-name:var(--font-roboto)] text-center">
                Enter Your Wallet Address To Check For Eligibility
            </p>
        </div>
    );
};

export default Page;
