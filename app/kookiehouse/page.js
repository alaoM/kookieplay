"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-full bg-[#281816]">
      <Image
        src="/kokie_room.png"
        alt="Enter Site"
        fill
        quality={100}
        priority
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}
