"use client";
import { useAuth } from "@/app/contextProvider/AuthContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

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

const Navbar = ({ collapsed, setCollapsed }) => {
  const { isAuthenticated, login, logout } = useAuth();
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [songMenuOpen, setSongMenuOpen] = useState(false);
  const router = useRouter();

  

  const handleLogin = () => {

    login();
  };

  const handleLogout = () => {

    logout();
  };

  const handleProfileMenuToggle = () => {
    setProfileMenuOpen(!profileMenuOpen);
  }

 


 
  // Handle button click, execute logic based on button name
  const handleButtonClick = (btnName) => {
    
    switch (btnName) {
      case "volume_btn":
        // Add volume control logic here
        console.log("Volume button clicked!");
        break;
      case "previous_btn":
        // Add previous button logic here
        console.log("Previous button clicked!");
        break;
      case "play_btn":
        // Add play/pause logic here
        console.log("Play button clicked!");
        break;
      case "next_btn":
        // Add next button logic here
        console.log("Next button clicked!");
        break;
      case "drop_down_open_btn":
        // Toggle dropdown state when dropdown button is clicked
        setSongMenuOpen(!songMenuOpen);
        console.log("Dropdown toggle clicked!");
        break;
      default:
        console.log("Unknown button clicked");
    }
  };

  return (
    <div className="relative w-full z-[100] flex flex-col ">
      {/* Top Bar */}
      <div className="relative w-full h-20 sm:h-16 p-10">
        <Image
          src="/navbar/header_bg_container.svg"
          alt="Navbar Top"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-center md:justify-between justify-evenly   sm:px-2 lg:px-6">
          {/* Logo */}
          <div className="flex lg:w-1/4 items-center gap-2">
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
          <div className="md:flex flex-col items-start gap-1 md:w-auto hidden relative">
            <p className="text-[#FF9E5E] text-xs text-center hidden lg:block font-[family-name:var(--font-lilita)]">Song Title</p>
            <div className="flex justify-center">
              <div className="bg-[#4f2628] border-[3px] border-[#3d221f] dot-pattern rounded-2xl p-1 flex gap-1 shadow-inner">
                {[
                  "volume_btn",
                  "previous_btn",
                  "play_btn",
                  "next_btn",
                  "drop_down_open_btn",
                ].map((btn, index) => {
                  const isDropdown = btn === "drop_down_open_btn";
                  return (
                    <button
                      key={index}
                      className="flex items-center justify-center hover:scale-105 transition-transform"
                      onClick={() => handleButtonClick(btn)}
                      style={
                        isDropdown
                          ? {
                            transform: songMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.3s ease-in-out",
                          }
                          : {}
                      }
                    >
                      <Image
                        src={`/song_buttons/${btn}.svg`}
                        alt={btn}
                        width={30}
                        height={30}
                      />
                    </button>
                  )
                }
                )}
              </div>
            </div>
            {
              songMenuOpen && (
                <div className="absolute top-18 right-0 w-56 h-64  bg-[url('/navbar/profile_menu_container.svg')] bg-no-repeat bg-contain  flex flex-col gap-1">
                  <div className="flex items-center gap-2 px-4 mt-5 mb-4">
                    {/* Icon */}
                    <div className="border-2 border-[#3D221F] rounded-xl p-6">


                    </div>
                    <div>
                      <p className="text-[#F2C2B1] text-[20px] pr-2 text-shadow-2xs text-shadow-[#4F2C28] font-[family-name:var(--font-lilita)]">
                        KOOKIE
                      </p>
                      <p className="text-[#FF9E5E] text-[14px] pr-2 text-shadow-2xs text-shadow-[#4F2C28] font-extrabold font-[family-name:var(--font-roboto)]">
                        Land of Kookie
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-0 px-4   border-[#4F2C28]">
                    {/* Icon */}
                    <span className="text-[#F2C2B1] text-right text-[14px] pr-2 text-shadow-2xs text-shadow-[#4F2C28] font-[family-name:var(--font-lilita)]">
                      00:00
                    </span>
                    <div className="w-full bg-[#4f2628] border-[3px] border-[#3d221f] dot-pattern rounded-lg shadow-inner">
                      <p className="w-full h-2 bg-[url('/navbar/exp_gained_bar.svg')] bg-no-repeat bg-contain bg-left flex items-center justify-end">

                      </p>
                    </div>

                  </div>

                </div>

              )

            }
          </div>
          {/*   )} */}

          {/* Social Icons */}
          {/* {!collapsed && ( */}
          <div className="lg:flex flex-col items-start gap-1 md:w-auto hidden">
            <p className="text-[#FF9E5E] text-xs text-left font-[family-name:var(--font-lilita)]">Social</p>
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

          {/* auth Buttons */}

          {
            !isAuthenticated ? (
         <div className="flex flex-col items-start gap-1 w-auto">
                <p className="text-[#FF9E5E] text-xs text-center hidden lg:block font-[family-name:var(--font-lilita)]">Welcome Guest</p>
                <div className="flex justify-center gap-2">
                  <div className="bg-[#4f2628] border-[3px] border-[#3d221f] dot-pattern rounded-xl p-0.5 flex gap-1 shadow-inner">
                    <button
                      onClick={handleLogin}
                      className="flex items-center justify-center hover:scale-105 transition-transform"
                    >
                      <Image
                        src={`/buttons/login_btn.svg`}
                        alt="logn_btn_btn"
                        width={100}
                        height={70}
                      />
                    </button>

                  </div>

                  <div className="bg-[#4f2628] border-[3px] border-[#3d221f] dot-pattern rounded-xl p-0.5 flex gap-1 shadow-inner">
                    <button
                      onClick={handleLogin}
                      className="flex items-center justify-center hover:scale-105 transition-transform"
                    >
                      <Image
                        src={`/buttons/signup_btn.svg`}
                        alt="logn_btn_btn"
                        width={100}
                        height={70}
                      />
                    </button>

                  </div>
                </div>
              </div>
            ) : (
              /* Kookie Balance */
              <>
                <div className="flex flex-col items-start gap-1 md:w-auto sm:h:14 relative">
                  <p className="text-[#FF9E5E] text-xs text-center hidden lg:block font-[family-name:var(--font-lilita)]">Kookie Balance</p>
                  <div className="flex justify-center">
                    <div className="flex items-center bg-[#4f2628] border-[3px] border-[#3d221f] dot-pattern rounded-2xl p-1 gap-1 shadow-inner h-full">
                      <p className="text-[#FF9E5E] text-sm font-[family-name:var(--font-lilita)]">100,000,000</p>
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

                  <div className="flex items-center gap-2 h-full relative cursor-pointer" onClick={handleProfileMenuToggle}>
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
                    {
                      profileMenuOpen && (
                        <div className="absolute top-18 right-0 w-52 h-64  bg-[url('/navbar/profile_menu_container.svg')] bg-no-repeat bg-contain  flex flex-col gap-1">
                          <div className="flex items-center gap-2 px-4 mt-4">
                            {/* Icon */}
                            <div>
                              <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_1_7540)">
                                  <path d="M20.2609 5.235L13.7226 1.462C12.6549 0.846 11.3341 0.846 10.2554 1.462L3.72812 5.235C2.66043 5.851 2 6.995 2 8.238V15.762C2 16.994 2.66043 18.138 3.72812 18.765L10.2664 22.538C11.3341 23.154 12.6549 23.154 13.7336 22.538L20.2719 18.765C21.3396 18.149 22 17.005 22 15.762V8.238C21.989 6.995 21.3286 5.862 20.2609 5.235ZM11.9945 6.874C13.4144 6.874 14.5592 8.018 14.5592 9.437C14.5592 10.856 13.4144 12 11.9945 12C10.5746 12 9.42983 10.856 9.42983 9.437C9.42983 8.029 10.5746 6.874 11.9945 6.874ZM14.9444 17.126H9.04458C8.153 17.126 7.63566 16.136 8.13099 15.399C8.87947 14.288 10.3324 13.54 11.9945 13.54C13.6566 13.54 15.1095 14.288 15.858 15.399C16.3533 16.125 15.825 17.126 14.9444 17.126Z" fill="#F2C2B1" />
                                  <path d="M11.9941 13.7402C10.4889 13.7403 9.17725 14.3757 8.4375 15.3184L8.29688 15.5107C7.88953 16.1171 8.3162 16.9258 9.04492 16.9258H14.9443C15.6643 16.9258 16.0971 16.1049 15.6924 15.5117V15.5107C14.9865 14.4629 13.6 13.7402 11.9941 13.7402ZM11.9941 7.07422C10.6854 7.07441 9.63014 8.13888 9.62988 9.43652C9.62988 10.7448 10.6847 11.7996 11.9941 11.7998C13.3037 11.7998 14.3594 10.7449 14.3594 9.43652C14.3591 8.12832 13.3036 7.07422 11.9941 7.07422ZM22.2002 15.7617C22.2002 16.9938 21.586 18.1347 20.5781 18.8096L20.3721 18.9385L13.834 22.7109L13.833 22.7119C12.7643 23.3222 11.4695 23.361 10.3809 22.8262L10.166 22.7109L3.62793 18.9385L3.62695 18.9375C2.49881 18.275 1.7998 17.0655 1.7998 15.7617V8.23828C1.7998 6.9242 2.49806 5.71344 3.62793 5.06152L10.1553 1.28906L10.1562 1.28809L10.373 1.17383C11.4697 0.639957 12.7631 0.678034 13.8223 1.28906L20.3604 5.06152L20.3623 5.0625L20.5684 5.19336C21.5745 5.87553 22.1893 7.00476 22.2002 8.23633V15.7617Z" stroke="#4F2C28" strokeWidth="0.4" />
                                </g>
                                <defs>
                                  <filter id="filter0_d_1_7540" x="1.59998" y="0.599976" width="20.8" height={24} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="1.2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.172549 0 0 0 0 0.156863 0 0 0 1 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_7540" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_7540" result="shape" />
                                  </filter>
                                </defs>
                              </svg>

                            </div>
                            <span className="text-[#F2C2B1] text-[14px] pr-2 text-shadow-2xs text-shadow-[#4F2C28] font-[family-name:var(--font-lilita)]">
                              My Profile
                            </span>
                          </div>

                          <div className="flex items-center gap-2 px-4  py-3 border-b-[3.5px] border-[#4F2C28]">
                            {/* Icon */}
                            <div>
                              <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_1_7535)">
                                  <path d="M19.5682 4.75972L13.9302 1.47031C12.8506 0.84323 11.1603 0.84323 10.0807 1.47031L4.38822 4.78172C2.13086 6.32192 2 6.55294 2 9.00625V14.98C2 17.4333 2.13086 17.6753 4.43184 19.2375L10.0698 22.5269C10.615 22.846 11.313 23 12 23C12.687 23 13.385 22.846 13.9193 22.5269L19.6118 19.2155C21.8691 17.6753 22 17.4443 22 14.991V9.00625C22 6.55294 21.8691 6.32192 19.5682 4.75972ZM12 15.5741C10.048 15.5741 8.45583 13.9679 8.45583 11.9986C8.45583 10.0294 10.048 8.42318 12 8.42318C13.952 8.42318 15.5442 10.0294 15.5442 11.9986C15.5442 13.9679 13.952 15.5741 12 15.5741Z" fill="#F2C2B1" />
                                  <path d="M12.0059 0.799805C12.7253 0.799866 13.4538 0.96301 14.0303 1.29785H14.0312L19.6689 4.58691L19.6807 4.59375L19.5684 4.75977L19.6807 4.59473C20.8186 5.36729 21.4722 5.84125 21.8203 6.44922C22.1718 7.06339 22.2002 7.79209 22.2002 9.00586V14.9912C22.2002 16.2051 22.1717 16.9329 21.8262 17.5439C21.4837 18.1498 20.8412 18.619 19.7246 19.3809L19.7188 19.3848L19.7119 19.3887L14.0195 22.7002L14.0186 22.6992C13.446 23.0402 12.712 23.2002 12 23.2002C11.3757 23.2002 10.7351 23.0782 10.1943 22.8193L9.96875 22.6992L4.33105 19.4102L4.31934 19.4033C3.18078 18.6303 2.52775 18.1529 2.17969 17.542C1.82844 16.9253 1.79981 16.1943 1.7998 14.9805V9.00586C1.79981 7.7921 1.82835 7.06418 2.17383 6.45312C2.51637 5.84738 3.15884 5.37803 4.27539 4.61621L4.28125 4.6123L4.28809 4.6084L9.98047 1.29785L10.2031 1.17969C10.7388 0.924186 11.3761 0.799805 12.0059 0.799805ZM12 8.62305C10.1601 8.62305 8.65625 10.1386 8.65625 11.999C8.65646 13.8593 10.1602 15.374 12 15.374C13.8398 15.374 15.3435 13.8593 15.3438 11.999C15.3438 10.1386 13.8399 8.62305 12 8.62305Z" stroke="#4F2C28" strokeWidth="0.4" />
                                </g>
                                <defs>
                                  <filter id="filter0_d_1_7535" x="1.59998" y="0.599976" width="20.8" height={24} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="1.2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.172549 0 0 0 0 0.156863 0 0 0 1 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_7535" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_7535" result="shape" />
                                  </filter>
                                </defs>
                              </svg>

                            </div>
                            <span className="text-[#F2C2B1] text-[14px] pr-2 text-shadow-2xs text-shadow-[#4F2C28] font-[family-name:var(--font-lilita)]">
                              Settings
                            </span>
                          </div>

                          

                          <div className="flex items-center gap-2 px-4  py-2 mb-2 cursor-pointer" onClick={handleLogout}>
                            {/* Icon */}
                            <div>
                              <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_1_7531)">
                                  <path d="M16.6168 1H7.39419C3.38819 1 1 3.387 1 7.391V16.598C1 20.613 3.38819 23 7.39419 23H16.6058C20.6118 23 23 20.613 23 16.609V7.391C23.011 3.387 20.6228 1 16.6168 1ZM14.1185 17.093H8.70384C8.25261 17.093 7.87843 16.719 7.87843 16.268C7.87843 15.817 8.25261 15.443 8.70384 15.443H14.1185C15.5272 15.443 16.6828 14.299 16.6828 12.88C16.6828 11.461 15.5382 10.317 14.1185 10.317H8.53876L8.8249 10.603C9.14406 10.922 9.14406 11.45 8.8249 11.769C8.65982 11.934 8.45071 12.011 8.24161 12.011C8.0325 12.011 7.8234 11.934 7.65832 11.769L5.93046 10.042C5.6113 9.723 5.6113 9.195 5.93046 8.876L7.65832 7.149C7.97748 6.83 8.50574 6.83 8.8249 7.149C9.14406 7.468 9.14406 7.996 8.8249 8.315L8.45071 8.678H14.1185C16.4407 8.678 18.3336 10.57 18.3336 12.891C18.3336 15.212 16.4407 17.093 14.1185 17.093Z" fill="#F29E9B" />
                                  <path d="M16.6172 0.799805C18.6597 0.799885 20.3137 1.40954 21.4561 2.55273C22.5984 3.6959 23.2056 5.34912 23.2002 7.39062V16.6094C23.2001 18.651 22.59 20.3041 21.4463 21.4473C20.3025 22.5904 18.6482 23.2002 16.6055 23.2002H7.39453C5.35197 23.2002 3.69748 22.5907 2.55371 21.4463C1.40995 20.3017 0.799805 18.6448 0.799805 16.5977V7.39062C0.799879 5.349 1.41002 3.69586 2.55371 2.55273C3.69746 1.40957 5.35181 0.799805 7.39453 0.799805H16.6172ZM8.68359 7.29004C8.47281 7.07952 8.13903 7.05325 7.89746 7.21094L7.7998 7.29004L6.07227 9.01758C5.83126 9.25846 5.83126 9.6595 6.07227 9.90039L7.7998 11.6279L7.89941 11.709C8.004 11.7782 8.12211 11.8105 8.24121 11.8105C8.4001 11.8105 8.55803 11.7534 8.68359 11.6279L8.7627 11.5303C8.89818 11.3233 8.89816 11.0487 8.7627 10.8418L8.68359 10.7441L8.39746 10.458L8.05566 10.1172H14.1182C15.6482 10.1172 16.8827 11.3504 16.8828 12.8799C16.8828 14.41 15.6367 15.6426 14.1182 15.6426H8.7041C8.36338 15.6426 8.07836 15.9273 8.07812 16.2676C8.07812 16.608 8.36324 16.8926 8.7041 16.8926H14.1182C16.3306 16.8926 18.1338 15.1004 18.1338 12.8906C18.1336 10.6803 16.3298 8.87793 14.1182 8.87793H7.95703L8.31152 8.53418L8.68555 8.17188C8.89472 7.96102 8.92035 7.62847 8.7627 7.3877L8.68359 7.29004Z" stroke="#59211A" strokeWidth="0.4" />
                                </g>
                                <defs>
                                  <filter id="filter0_d_1_7531" x="0.599976" y="0.599976" width="22.8" height={24} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="1.2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.34902 0 0 0 0 0.129412 0 0 0 0 0.101961 0 0 0 1 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_7531" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_7531" result="shape" />
                                  </filter>
                                </defs>
                              </svg>

                            </div>
                            <span className="text-[#F29E9B] text-[14px] pr-2 text-shadow-2xs text-shadow-[#4F2C28] font-[family-name:var(--font-lilita)]">
                              Log out
                            </span>
                          </div>
                        </div>

                      )

                    }


                  </div>
                </div>


              </>
            )
          }

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
