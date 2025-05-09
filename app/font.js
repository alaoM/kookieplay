import { Inter, Lilita_One, Roboto } from "next/font/google";

// Configure Lilita One font
export const lilitaOne = Lilita_One({
  weight: "400", // Lilita One only has one weight
  subsets: ["latin"],
  variable: "--font-lilita",
});

// Configure Roboto font with multiple weights
export const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

// Configure Roboto font with multiple weights
export const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});