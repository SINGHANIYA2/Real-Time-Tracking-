"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Nav Bar/Navbar";
import LogInHome from "./Component/login/LoginHome"
import Signup from "./Component/Signup/signup";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loginpage, setLoginpage] = useState(false);
  const [signuppage, setSignup] = useState(false);
  useEffect(() => {
    if (loginpage || signuppage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loginpage, signuppage]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative `}
      >
        <Navbar setLoginpage={setLoginpage} setSignup={setSignup}></Navbar>
        {children}

        {
          <div className={` ${loginpage ? "flex" : "hidden"}`}>
            <LogInHome setLoginpage={setLoginpage}></LogInHome>
          </div>
        }
        {
          <div className={` ${signuppage ? "flex" : "hidden"}`}>
            <Signup setSignup={setSignup}></Signup>
          </div>
        }
        <Footer></Footer>
      </body>
    </html>
  );
}
