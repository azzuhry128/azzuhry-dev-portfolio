import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import FooterComponent from "./components/header-component";
import BottomNavbarComponent from "./components/bottom-navbar-component";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Azzuhry-dev",
  description: "Made by me ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial scale=1.0" />
      </head>
      <body className="flex h-screen flex-col justify-between bg-custom-black-background">
        {children}
      </body>
    </html>
  );
}
