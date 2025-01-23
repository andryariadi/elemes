"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import ButtonMotion from "./ButtonMotion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`px-5 md:px-7 xl:px-10 2xl:px-[9.3rem] min-h-[6.5rem] flex items-center justify-between sticky top-0 z-50 shadow-sm transition-colors duration-300 ${
        isScrolled ? "bg-white-1 bg-opacity-30 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={150} height={150} />
      </Link>

      {/* Nav Links */}
      <nav className="hidden lg:flex items-center gap-10">
        {navLinks.map((link) => (
          <Link key={link.title} href={link.href} className="relative b-rose-500 text-sm text-dark_gray font-semibold hover:text-green-1 transition-all duration-300 py-5">
            <span>{link.title}</span>

            {link.title === "Promotions" && <span className="absolute -top-1 -right-2 bg-dark_red text-white-1 text-xs font-light px-3 py-1 rounded-full">Hot</span>}
          </Link>
        ))}
      </nav>

      {/* Auth */}
      <div className="flex items-center gap-3">
        <ButtonMotion title="Masuk" link="/login" icon />
        <ButtonMotion title="Daftar Sekarang" link="/register" />
      </div>
    </header>
  );
};

export default Navbar;
