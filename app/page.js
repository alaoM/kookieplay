"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div
      className="h-screen bg-[#281816] bg-[url('/entersite/kookiekingdom.png')] bg-cover  bg-center lg:bg-top flex items-center justify-center"
    
    >
      <div className="flex flex-col items-center justify-center w-full max-w-screen-md px-4 cursor-pointer">
        {/* Visible click target */}
        <div className="relative flex items-center justify-center w-[50%] sm:w-[70%] md:w-[200px] h-auto opacity-0"   onClick={() => router.push("/")}>
          <Image
            src="/entersite/kookiehouse.png"
            alt="Enter Site"
            layout="responsive"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
