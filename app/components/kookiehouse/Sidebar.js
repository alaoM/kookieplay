'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const menuItems = [
    { icon: '/sidebar/Gamepad.svg', label: 'Mini Game' },
    { icon: '/sidebar/Leaderboard.svg', label: 'Leaderboard' },
    { icon: '/sidebar/Missions.svg', label: 'Missions' },
    { icon: '/sidebar/token_sale.svg', label: 'Token Sale' },
    { icon: '/sidebar/Coins_swap.svg', label: 'Swap' },
    { icon: '/sidebar/chain_chest.svg', label: 'Stake' },
     { icon: '/sidebar/Store.svg', label: 'Shop' },
     { icon: '/sidebar/parachute_cookie.svg', label: 'Airdrop' },
     { icon: '/sidebar/comic_pop.svg', label: 'Comics' },
];

const socialIcons = [
    { icon: '/socialIcons/X.svg', label: 'X' },
    { icon: '/socialIcons/Instagram.svg', label: 'Instagram' },
    { icon: '/socialIcons/Facebook.svg', label: 'Facebook' },
    { icon: '/socialIcons/Tiktok.svg', label: 'Tiktok' },
    { icon: '/socialIcons/YouTube.svg', label: 'YouTube' },
    { icon: '/socialIcons/Telegram.svg', label: 'Telegram' },
    { icon: '/socialIcons/Discord.svg', label: 'Discord' },
    { icon: '/socialIcons/Dexscreener.svg', label: 'Dexscreener' },
    { icon: '/socialIcons/Gitbook.svg', label: 'Gitbook' },
];

const Sidebar = ({ collapsed, setCollapsed }) => {
    const sidebarRef = useRef(null);
    const [touchStartX, setTouchStartX] = useState(0);

    // Handle touch gestures for mobile
    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (collapsed) return;

        const touchX = e.touches[0].clientX;
        const diff = touchStartX - touchX;

        if (diff > 50) {
            setCollapsed(true);
        }
    };

    // Prevent body scrolling when sidebar is open on mobile
    useEffect(() => {
        if (!collapsed && window.innerWidth < 768) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [collapsed]);

    // Sidebar content component to avoid duplication
    // In your SidebarContent component
    const SidebarContent = () => (
        <div className="relative  flex flex-col h-full text-white">
            {/* Top section - Song controls (if needed) */}
            {!collapsed && (
                <div className="px-3 mt-5 lg:hidden">
                    <div className="bg-[#4f2628] border-[3px] border-[#3d221f] dot-pattern rounded-2xl p-1 flex gap-1 shadow-inner">
                        {[
                            'volume_btn',
                            'previous_btn',
                            'play_btn',
                            'next_btn',
                            'drop_down_open_btn',
                        ].map((btn, index) => (
                            <button key={index} className="flex items-center justify-center hover:scale-105 transition-transform">
                                <Image src={`/song_buttons/${btn}.svg`} alt={btn} width={40} height={40} />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Middle section - Scrollable menu items */}
            <div className="flex-1 overflow-hidden flex flex-col mt-3">
                <div className="px-3 overflow-y-auto flex-1">
                    <div className="space-y-2 lg:mt-2 pr-1">
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 px-2 py-2 bg-[#4f2628] rounded-md border border-[#3d221f] cursor-pointer hover:scale-[1.02] transition-transform"
                            >
                                <Image src={item.icon || "/placeholder.svg"} alt={item.label} width={32} height={32} />
                                {!collapsed && (
                                    <span className="text-[15px] font-[family-name:var(--font-lilita)]">{item.label}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom section - Social icons (always visible) */}
            {!collapsed && (
                <div className="mt-3 bg-[#4f2628] border-[2px] border-[#3d221f] dot-pattern shadow-inner lg:hidden">
                    <div className="flex items-center justify-center gap-1 p-1">
                        {socialIcons.slice(0, 5).map((icon, index) => (
                            <div key={index} className="rounded-full hover:bg-[#3d221f] cursor-pointer">
                                <Image src={icon.icon || "/placeholder.svg"} alt={icon.label} width={40} height={40} />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center gap-1 p-1">
                        {socialIcons.slice(5).map((icon, index) => (
                            <div key={index} className="flex items-center justify-center rounded-full hover:bg-[#3d221f] cursor-pointer">
                                <Image src={icon.icon || "/placeholder.svg"} alt={icon.label} width={40} height={40} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <>
            {/* Mobile Sidebar - Fixed position overlay */}
            <div
                ref={sidebarRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                className={`
                    md:hidden fixed top-[var(--navbar-height,5rem)] left-0 h-[calc(100vh-var(--navbar-height,5rem))] 
                    w-64 z-50 transition-transform duration-300 ease-in-out
                    ${collapsed ? '-translate-x-full' : 'translate-x-0'}
                `}
            >
                {/* Background image */}
                <div className="relative w-full h-full">
                    <Image
                        src="/sidebar/left_nav_bg.png"
                        alt="Sidebar Background"
                        fill
                        className="object-cover z-0"
                    />
                    <SidebarContent />
                </div>

                {/* Mobile toggle button - positioned on the right edge */}
                <div className="relative w-4 h-full z-[70]">
                    <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-[75]">
                        <button
                            onClick={() => setCollapsed(!collapsed)}
                            aria-label="Toggle Sidebar"
                            className="flex items-center justify-center"
                        >
                            <Image
                                src={
                                    collapsed
                                        ? '/sidebar/left_side_bar_open_btn.svg'
                                        : '/sidebar/left_side_bar_close_btn.svg'
                                }
                                alt="Toggle Sidebar"
                                width={24}
                                height={24}
                            />
                        </button>
                    </div>
                    <Image
                        src="/sidebar/left_nav_bg_shadowbar.png"
                        alt="Sidebar Divider"
                        fill
                        className="object-cover z-[71]"
                    />
                </div>
                {/* Right orange border */}
                <div className="absolute top-0 right-0 w-2 h-full">

                    <Image
                        src="/sidebar/left_nav_border.png"
                        alt="Sidebar Right"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Backdrop overlay for mobile */}
            {!collapsed && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={() => setCollapsed(true)}
                    aria-hidden="true"
                />
            )}

            {/* Desktop Sidebar - Part of the layout */}
            <div className="hidden md:flex z-50">
                {/* Sidebar */}
                <div
                    className={`
                        relative transition-all duration-300 ease-in-out
                        ${collapsed ? 'w-16 lg:w-20' : 'w-64'} 
                        flex flex-col
                    `}
                >
                    {/* Background image */}
                    <Image
                        src="/sidebar/left_nav_bg.png"
                        alt="Sidebar Background"
                        fill
                        className="object-cover z-0"
                    />
                    <SidebarContent />
                </div>

                {/* Toggle button */}
                <div className="relative w-0.5 h-full z-50">
                    <div className="absolute inset-0 flex items-center justify-center w-6 z-10">
                        <button onClick={() => setCollapsed(!collapsed)} aria-label="Toggle Sidebar">
                            <Image
                                src={
                                    collapsed
                                        ? '/sidebar/left_side_bar_open_btn.svg'
                                        : '/sidebar/left_side_bar_close_btn.svg'
                                }
                                alt="Toggle Sidebar"
                                width={24}
                                height={24}
                            />
                        </button>
                    </div>
                    <Image
                        src="/sidebar/left_nav_bg_shadowbar.png"
                        alt="Sidebar Divider"
                        fill
                        className="object-cover z-[99]"
                    />
                </div>

                {/* Right orange border */}
                <div className="relative w-2 h-full">
                    <Image
                        src="/sidebar/left_nav_border.png"
                        alt="Sidebar Right"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </>
    );
};

export default Sidebar;