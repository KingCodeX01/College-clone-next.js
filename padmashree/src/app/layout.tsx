import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Slider from "./Components/slider";

export const metadata: Metadata = {
  title: "Ecommerce Webiste",
  description: "Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>

        <Slider/>
        <main>{children}</main>
        <Footer/>
        </body>
    </html>
  );
}
