
import "./globals.css";
import { inter, lilitaOne, roboto } from "./font";



export const metadata = {
  title: "KOOKIE",
  description: "KOOKIE token sale",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={` ${roboto.variable} ${lilitaOne.variable} ${inter.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
