"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaLink } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";

const Page = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  return (
    <div className="h-full bg-[#281816] flex flex-col items-center font-[family-name:var(--font-lilita)]">
      <div className="w-full max-w-2xl p-6 space-y-4 border">
        <p className="text-2xl text-white">$KOOKIE</p>
        <p className="text-2xl text-white">Presale Round 1</p>
        <p className="text-sm text-[#CF8F78] text-shadow-[#3d221f] font-[family-name:var(--font-roboto)]">
          Presale Ends in <span className="text-white">2d : 11h : 55m : 13s</span>
        </p>

        <div className="bg-[#3d221f] border-[3px] border-[#4f2628] rounded-2xl shadow-inner">
          <p className="h-8 bg-[url('/navbar/exp_gained_bar.svg')] bg-no-repeat bg-contain bg-left flex items-center justify-center">
            <span className="text-white text-sm pr-2 text-shadow-2xs text-shadow-[#3d221f]">
              380,000,000.900 $KOOKIE Left
            </span>
          </p>
        </div>

        <div className="flex gap-5 items-center justify-center px-4">
            <div className="rounded-2xl  border-4 px-8 py-6 max-w-full">
                </div>
            </div>

        <div className="p-4 rounded-xl bg-[#FFBA6B] flex items-center w-fit shadow-md">
          <div className="flex items-center gap-1 font-extrabold">
            <div className=" bg-opacity-10 p-2 rounded-full shadow-md">
              <TfiReload size={24} color="#fff" />
            </div>
          </div>
        </div>

        <p className="text-[#CF8F78] text-base font-[family-name:var(--font-roboto)] text-center">Purchased 0</p>
      </div>
    </div>
  );
};

export default Page;
