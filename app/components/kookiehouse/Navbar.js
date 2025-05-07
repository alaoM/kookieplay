"use client";
import Image from "next/image"; 

const socialIcons = [
  { icon: "/socialIcons/X.svg", label: "X" },
  { icon: "/socialIcons/Instagram.svg", label: "Instagram" },
  { icon: "/socialIcons/Facebook.svg", label: "Facebook" },
  { icon: "/socialIcons/Tiktok.svg", label: "Tiktok" },
  { icon: "/socialIcons/YouTube.svg", label: "YouTube" },
  { icon: "/socialIcons/Telegram.svg", label: "Telegram" },
  { icon: "/socialIcons/Discord.svg", label: "Discord" },
  { icon: "/socialIcons/Dexscreener.svg", label: "Dexscreener" },
  { icon: "/socialIcons/Gitbook.svg", label: "Gitbook" },
];

const Navbar = ({collapsed, setCollapsed}) => {

  return (
    <div className="relative w-full z-[100] flex flex-col">
      {/* Top Bar */}
      <div className="relative w-full h-20 sm:h-16">
        <Image
          src="/navbar/header_bg_container.svg"
          alt="Navbar Top"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-center md:justify-between justify-evenly   sm:px-2 lg:px-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <button onClick={() => setCollapsed(!collapsed)} className="md:hidden">
              <Image src="/navbar/menu.svg" alt="Menu" width={28} height={28} className="w-7 h-7 sm:w-8 sm:h-8" />
            </button>
            <Image
              src="/logo.png"
              alt="KookieHouse Logo"
              width={48}
              height={48}
              className="object-contain"
            />
            <Image
              src="/blue_kookie_font_logo.png"
              alt="Kookie Font"
              width={100}
              height={40}
              className="object-contain hidden md:block"
            />
          </div>

          {/* Song Controls */}
         {/*  {!collapsed && ( */}
            <div className="md:flex flex-col items-start gap-1 md:w-auto hidden">
              <p className="text-[#FF9E5E] font-extrabold text-xs text-center hidden lg:block font-[family-name:var(--font-lilita)]">Song Title</p>
              <div className="flex justify-center">
                <div className="bg-[#4f2628] border-[3px] border-[#3d221f] dot-pattern rounded-2xl p-1 flex gap-1 shadow-inner">
                  {[
                    "volume_btn",
                    "previous_btn",
                    "play_btn",
                    "next_btn",
                    "drop_down_open_btn",
                  ].map((btn, index) => (
                    <button
                      key={index}
                      className="flex items-center justify-center hover:scale-105 transition-transform"
                    >
                      <Image
                        src={`/song_buttons/${btn}.svg`}
                        alt={btn}
                        width={30}
                        height={30}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
        {/*   )} */}

          {/* Social Icons */}
          {/* {!collapsed && ( */}
            <div className="lg:flex flex-col items-start gap-1 md:w-auto hidden">
              <p className="text-[#FF9E5E] font-extrabold text-xs text-left font-[family-name:var(--font-lilita)]">Social</p>
              <div className="flex justify-center">
                <div className="bg-[#4f2628] border-[3px] border-[#3d221f] dot-pattern rounded-2xl p-1 flex flex-wrap gap-1 shadow-inner">
                  {socialIcons.map((data, index) => (
                    <button
                      key={index}
                      className="flex items-center justify-center hover:scale-105 transition-transform"
                    >
                      <Image
                        src={data.icon}
                        alt={data.label}
                        width={30}
                        height={30}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
         {/*  )} */}

          {/* Kookie Balance */}
          <div className="flex flex-col items-start gap-1 md:w-auto sm:h:14">
            <p className="text-[#FF9E5E] font-extrabold text-xs text-center hidden lg:block font-[family-name:var(--font-lilita)]">Kookie Balance</p>
            <div className="flex justify-center">
              <div className="flex items-center bg-[#4f2628] border-[3px] border-[#3d221f] dot-pattern rounded-2xl p-1 gap-1 shadow-inner h-full">
                <p className="text-[#FF9E5E] font-extrabold text-sm font-[family-name:var(--font-lilita)]">100,000,000</p>
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
          </div>

          {/* Profile */}
          <div className="flex items-center gap-2 h-12 ">
            <div className="md:flex flex-col gap-1 items-center justify-center hidden">
              <div className="flex items-center gap-1">
                <Image
                  src="/navbar/kookie_tier_icon.svg"
                  alt="kookie_tier_icon"
                  width={20}
                  height={20}
                />
                <p className="text-[#FF9E5E] font-extrabold text-sm uppercase font-[family-name:var(--font-lilita)]">NICKNAME1234</p>
              </div>
              <div className="w-full bg-[#4f2628] border-[3px] border-[#3d221f] dot-pattern rounded-lg shadow-inner">
                <p className="w-full h-5 bg-[url('/navbar/exp_gained_bar.svg')] bg-no-repeat bg-contain bg-left flex items-center justify-end">
                  <span className="text-[#FF9E5E] font-extrabold text-[10px] pr-2 text-shadow-2xs text-shadow-[#3d221f] font-[family-name:var(--font-lilita)]">
                    EXP 2,245/4,500
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 h-full">
              <button className="h-full border-2 border-[#000] rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                <Image
                  src="/navbar/profile_image.svg"
                  alt="profile"
                  width={32}
                  height={32}
                  className="h-full w-auto object-cover"
                />
              </button>
              <Image
                src="/navbar/profile_dropdown_button.svg"
                alt="dropdown"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Middle and Bottom Bars */}
      <div className="relative w-full h-0.5">
        <Image
          src="/navbar/header_shadow_bar.svg"
          alt="Navbar Middle"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative w-full h-2">
        <Image
          src="/navbar/header_border.svg"
          alt="Navbar Bottom"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Navbar;
