"use client"
import React, { useState } from 'react'
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Kookiehouselayout = ( {children}) => {
    const [collapsed, setCollapsed] = useState(true);
    

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar at the top, full width */}
      <Navbar collapsed={collapsed} setCollapsed={setCollapsed}/>

      {/* Below Navbar: Sidebar + Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar on the left */}
        <Sidebar  collapsed={collapsed} setCollapsed={setCollapsed}/>

        {/* Main content area */}
        <main className={` flex-1
          h-full overflow-auto
          transition-all duration-300 ease-in-out
          ${collapsed ? 'md:p-[5] lg:p-[5]' : 'md:p-5]'}
        `}>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Kookiehouselayout