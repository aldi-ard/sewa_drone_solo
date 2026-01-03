import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/navbar/navbar";
import Footer from "./ui/footer/footer";
import "swiper/swiper.css"
import { ITCAvanatGardeStdBold} from "./style/fonts";

export const metadata: Metadata = {
  title: "Sewa Drone Solo",
  description: "jasa vidiografer, fotografer, dan vidio drone di area solo dan indonesia",
  icons:{
    icon : "../drone_solo.png",
    shortcut : "../drone_solo.png",
    apple : "../drone_solo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ITCAvanatGardeStdBold.className}>
        <Navbar/>
        <main className="bg-gray-100 min-h-screen">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
