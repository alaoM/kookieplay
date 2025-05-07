"use client";

import Image from "next/image";

export default function Home() {
 
  return (
    <div className="h-full  bg-[#281816]     relative">
      
    
        <Image
          src="/entersite/Vinnys_room_placeholder.svg"
          alt="Enter Site"
          width={500}
          height={500}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain w-full h-auto"
        />
        {/* Bed Image positioned at bottom-left with responsive width */}
        <div className="absolute bottom-[-20px] left-[-90px] w-full h-auto">
        <Image
          src="/entersite/Bed.svg"
          alt="Enter Site"
          width={500}
          height={500}
           sizes="(max-width: 768px) 100vw, 33vw"
         className="object-contain"
        /> 
        </div>
         
      
    </div>
  );
}
