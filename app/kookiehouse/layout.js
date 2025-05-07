"use client";

import Kookiehouselayout from "../components/kookiehouse/Kookiehouselayout";
import { inter, lilitaOne, roboto } from "../font";

export default function Layout({ children }) {

  return (

    <Kookiehouselayout>
    
        {children}
      
    </Kookiehouselayout>

  );
}