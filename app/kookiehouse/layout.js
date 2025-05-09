"use client";

import Kookiehouselayout from "../components/kookiehouse/Kookiehouselayout";
import { AuthProvider } from "../contextProvider/AuthContext";

export default function Layout({ children }) {

  return (
    <AuthProvider>
      <Kookiehouselayout>
        {children}
      </Kookiehouselayout>
    </AuthProvider>

  );
}